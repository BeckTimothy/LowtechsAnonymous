import siteHealthDisplay from './components/site-health-display'
import styles from '../page.module.css'
import {useEffect, useState} from "react";
import {SiteObject} from "@/app/lib/definitions";
import {fetchSites} from "@/app/lib/data";

export default async function Page() {
    const webringData: SiteObject[] = await fetchSites()

    //console.log(webringData)

    return (
        <div>
            <div className={styles.scanline}/>
            <div className={styles.crt}/>
            <main className={styles.SiteWrapper}>
                {webringData.map((siteObject) => siteHealthDisplay(siteObject))}
            </main>
        </div>
    );
}