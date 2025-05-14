import { db } from '@/app/lib/db';
import webringSites from '../_data/webring.json';
import {SiteObject} from "@/app/lib/definitions";

async function seedSites(client: any) {

    await client.query(`
    Create TABLE IF NOT EXISTS sites (
        siteName VARCHAR(255) PRIMARY KEY,
        lastUpdated BIGINT NOT NULL,
        isValid BOOLEAN NOT NULL,
        isLive BOOLEAN NOT NULL
    );
  `);
    console.log('Seeding', webringSites.length, 'sites');
    const insertSites = await Promise.all(
        webringSites.map((site: SiteObject) => {
            return client.query(`
                INSERT INTO sites (siteName, lastUpdated, isValid, isLive)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT (siteName) DO NOTHING;
            `,
                [site.siteName, site.lastUpdated, site.isValid, site.isLive]);
        }),
    );

    return insertSites;
}

export async function GET() {
    const client = await db.connect();
    try {
        await client.query(`BEGIN`);
        await seedSites(client);
        await client.query(`COMMIT`);

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error: unknown) {
        console.error('Seeding failed:', error);
        await client.query(`ROLLBACK`);
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        } else {
            return Response.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}
