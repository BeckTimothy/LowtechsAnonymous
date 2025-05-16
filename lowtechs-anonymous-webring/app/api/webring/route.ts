import webringData from '../../_data/webring.json'
import {SiteObject} from "@/app/lib/definitions";
import {db} from '@/app/lib/db';

async function updateSite(client: any, siteObj: SiteObject) {

    const updatedSite = await client.query(`
                UPDATE sites
                SET lastUpdated = $2,
                    isValid     = $3,
                    isLive      = $4
                WHERE siteName = $1
        `,
        [siteObj.siteName, siteObj.lastUpdated, siteObj.isValid, siteObj.isLive]
    );

    return updatedSite
}

async function updateSites(client: any, siteList: SiteObject[]) {

    const updatedSites = await Promise.all(
        siteList.map((site: SiteObject) => {
            return client.query(
                `
                    UPDATE sites
                    SET lastUpdated = $2,
                        isValid = $3,
                        isLive = $4
                    WHERE siteName = $1
                `,
                [site.siteName, site.lastUpdated, site.isValid, site.isLive]
            );
        })
    );
    return updatedSites
}

async function getSites(client: any) {
    const data = await client.query(`
                SELECT * FROM sites
        `
    );

    const siteData: SiteObject[] = data.rows.map((row: any) => ({
        siteName: row.sitename,
        lastUpdated: row.lastupdated,
        isValid: row.isvalid,
        isLive: row.islive,
    }));

    return siteData;
}

const newSiteList: SiteObject[] = [];

const recursivelyUpdateSites = async (client: any, sites: SiteObject[]) => {
    let sitesList = sites
    let siteToUpdate = sitesList.shift();

    if (siteToUpdate) {
        //if last updated is within last 10 minutes, don't make needless api calls
        if (siteToUpdate.lastUpdated !== null && (new Date().valueOf() - siteToUpdate.lastUpdated) < 600000) {
            newSiteList.push(siteToUpdate)
            sitesList.length > 0 ? await recursivelyUpdateSites(client, sitesList) : await updateSites(client, newSiteList);
        } else {//else get site html
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
                return sitesList.length > 0 ? recursivelyUpdateSites(client, sitesList) : updateSites(client, newSiteList);
            })
        }
    }
}

async function updateWebring(client: any) {
    //make list of sites needing to be updated
    let json = webringData;

    //recursively loop through list updating each site
    await recursivelyUpdateSites(client, json);

    return true
}

export async function GET() {
    const client = await db.connect();
    try {
        return Response.json(await getSites(client));
    } catch (error: unknown) {
        console.error('Seeding failed:', error);
        await client.query(`ROLLBACK`);
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        } else {
            return Response.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }finally {
        client.release(); // ✅ Important: always release the connection
    }
}

export async function POST(req: Request) {
    const client = await db.connect();

    try {
        await client.query(`BEGIN`);
        await updateWebring(client)
        await client.query(`COMMIT`);

        return Response.json({ message: 'Database updated successfully' });
    } catch (error: unknown) {
        console.error('Seeding failed:', error);
        await client.query(`ROLLBACK`);
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        } else {
            return Response.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }finally {
        client.release(); // ✅ Important: always release the connection
    }
}