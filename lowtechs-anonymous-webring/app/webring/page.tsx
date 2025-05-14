import webringData from '../_data/webring.json';
import siteHealthDisplay from './components/site-health-display'
import styles from '../page.module.css'

export default async function Page() {

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