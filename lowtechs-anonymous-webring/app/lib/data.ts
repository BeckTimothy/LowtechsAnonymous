import {db} from "@/app/lib/db";
import {SiteObject} from "@/app/lib/definitions";
export async function fetchSites() {
    const client = await db.connect();
    try {
        const data = await client.query(`SELECT * FROM sites`);

        const siteData: SiteObject[] = data.rows.map((row: any) => ({
            siteName: row.sitename,
            lastUpdated: row.lastupdated,
            isValid: row.isvalid,
            isLive: row.islive,
        }));

        return siteData;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch the site list.");
    }finally {
        client.release(); // ✅ Important: always release the connection
    }
}