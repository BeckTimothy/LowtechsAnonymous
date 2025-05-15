import siteHealthDisplay from './components/site-health-display'
import styles from '../page.module.css'
import {useEffect, useState} from "react";
import {SiteObject} from "@/app/lib/definitions";
import {fetchSites} from "@/app/lib/data";
import WebringBanner from "@/app/webring/components/webring-banner";

export default async function Page() {
    const webringData: SiteObject[] = await fetchSites()

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