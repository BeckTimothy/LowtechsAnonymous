
import siteHealthDisplay from './components/site-health-display';
import styles from '../page.module.css';
import { SiteObject } from '@/app/lib/definitions';
import WebringBanner from '@/app/webring/components/webring-banner';
import { db } from '@/app/lib/db'; // your Postgres client

export const revalidate = 15; // Next.js App Router ISR (revalidation) in seconds

export default async function Page() {
    const webringData: SiteObject[] = await fetchSitesWithRevalidation();

    return (
        <div>
            <div className={styles.scanline} />
            <div className={styles.crt} />

            <main className={styles.SiteWrapper}>
                <WebringBanner />
                {webringData.map((siteObject) => siteHealthDisplay(siteObject))}
            </main>
        </div>
    );
}

/*
// Server-side fetch from PostgreSQL
async function fetchSitesWithRevalidation(): Promise<SiteObject[]> {
    const client = await db.connect();
    try {
        const result = await client.query(
            `SELECT siteName, lastUpdated, isValid, isLive
             FROM sites`
        );

        // Convert query result into SiteObject[]
        return result.rows.map(row => ({
            siteName: row.sitename,
            lastUpdated: Number(row.lastupdated),
            isValid: row.isvalid,
            isLive: row.islive
        }));

    } finally {
        client.release();
    }
}*/

async function fetchSitesWithRevalidation(): Promise<SiteObject[]> {
    const res = await fetch("http://localhost:3000/api/webring", {
	next: { revalidate: 15 }
    } as any);

    if (!res.ok){
	throw new Error("Failed to fetch");
    }

    return res.json();
}
