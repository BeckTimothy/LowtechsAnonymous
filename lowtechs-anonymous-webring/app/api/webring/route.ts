import webringData from '../../_data/webring.json'
import {SiteObject} from "@/app/lib/definitions";
import fs from 'fs';

const newSiteList: SiteObject[] = [];

const updateWebringJson = async (json: SiteObject[]) => {
    fs.writeFile('./app/_data/webring.json', JSON.stringify(json), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully!');
    });
}
const recursivelyUpdateSites = async (sites: SiteObject[]) => {
    let sitesList = sites
    let siteToUpdate = sitesList.shift();

    if(siteToUpdate){
        //if last updated is within last 10 minutes, don't make needless api calls
        if(siteToUpdate.lastUpdated !== null && ( new Date().valueOf() - siteToUpdate.lastUpdated ) < 600000){
            newSiteList.push(siteToUpdate)
            sitesList.length > 0 ? await recursivelyUpdateSites(sitesList) : await updateWebringJson(newSiteList);
        } else{//else get site html
            let url = 'https://' + siteToUpdate?.siteName

            //check if site is reachable
            let response = fetch(url)
            await response.then(response => {
                    //update isLive if page html is obtainable
                    siteToUpdate.isLive = response.status === 200

                    return response.text()
                }
            ).then(data => {
                //update isValid if page html contains webring urls
                let containsPrev = data.includes(`lowtechsanonymous.com/last/${siteToUpdate.siteName}`);
                let containsNext = data.includes(`lowtechsanonymous.com/next/${siteToUpdate.siteName}`);
                siteToUpdate.isValid = containsNext && containsPrev
                //update lastUpdated with new unix date
                siteToUpdate.lastUpdated = new Date().valueOf();

            }).finally(() => {
                //push updated site to list and recur or write to disk
                newSiteList.push(siteToUpdate)
                return sitesList.length > 0 ? recursivelyUpdateSites(sitesList) : updateWebringJson(newSiteList);
            })
        }
    }
}
async function updateWebring() {
    //make list of sites needing to be updated
    let json = webringData;

    //recursively loop through list updating each site
    await recursivelyUpdateSites(json);

    return true
}

export async function GET() {
    try {
        return Response.json( webringData );
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
export async function POST(req: Request) {
    //const json = await req.json().then(data => {
    //    return data
    //})
    //let url = typeof json.url === "string" ? json.url.toLowerCase() : null;
    try {
        return Response.json(await updateWebring());
    } catch (e) {
        return Response.json({ e }, { status: 500 });
    }
}