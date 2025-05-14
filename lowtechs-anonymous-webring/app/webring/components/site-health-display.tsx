import {SiteObject} from "@/app/lib/definitions";
import styles from '../../page.module.css';
import DeadSite from '../../icons/deadSite.svg';
import randomSiteIcon from './randomSiteIcon'


//live site icons

export default function siteHealthDisplay(siteObj: SiteObject) {
    let isDisabled = !siteObj.isLive || !siteObj.isValid;

    let dateArr = new Date(siteObj.lastUpdated).toTimeString().split(' ');
    let dateString = dateArr[0];


    const deadSiteSvg = () => {
        return (
            <div className={styles.iconWrapper}>
                <DeadSite  className={styles.disabledIcon} />
            </div>
        );
    };
    //randomSiteIcon()

    return (
        <div className={styles.SiteObjectCard}>
            <div className={styles.SiteObjectCardFlex}>
                    {isDisabled ? deadSiteSvg() : randomSiteIcon()}
                <div>
                    <p className={isDisabled ? styles.DisabledSiteName : styles.SiteName}>{siteObj.siteName}</p>
                    <p className={isDisabled ? styles.DisabledSiteDescription : styles.SiteDescription}>Last seen {Date.now() - siteObj.lastUpdated < 600000 ? " less than 10 minutes ago.": "at " + dateString }</p>
                </div>
            </div>
            <p className={isDisabled ? styles.DisabledSiteStatus : styles.SiteStatus}>{isDisabled?"OFFLINE":"ONLINE"}</p>
        </div>
    );
}