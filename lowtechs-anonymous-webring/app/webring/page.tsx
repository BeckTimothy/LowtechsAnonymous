import siteHealthDisplay from './components/site-health-display'
import styles from '../page.module.css'
import {SiteObject} from "@/app/lib/definitions";
import WebringBanner from "@/app/webring/components/webring-banner";


export default async function Page() {
    const webringData: SiteObject[] = await fetchSitesWithRevalidation();

    return (
        <div>
            <div className={styles.scanline}/>
            <div className={styles.crt}/>

            <main className={styles.SiteWrapper}>
                <WebringBanner />
                {webringData.map((siteObject) => siteHealthDisplay(siteObject))}
            </main>
        </div>
    );
}
async function fetchSitesWithRevalidation(): Promise<SiteObject[]> {
    const res = await fetch("http://localhost:3000/api/webring", {
        next: { revalidate: 15 }
    } as any);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}