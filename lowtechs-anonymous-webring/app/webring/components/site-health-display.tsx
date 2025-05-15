import {SiteObject} from "@/app/lib/definitions";
import styles from '../../page.module.css';
import DeadSite from '../../icons/deadSite.svg';
import randomSiteIcon from './randomSiteIcon'

export default function siteHealthDisplay(siteObj: SiteObject) {
    let isDisabled = !siteObj.isLive || !siteObj.isValid;

    //build date/time string of last site checkup
    let dateArr = new Date(siteObj.lastUpdated).toTimeString().split(' ');
    let dateString = dateArr[0];
    let timeString;
    if(Date.now() - siteObj.lastUpdated < 600000){
        timeString = "Checked less than 10 minutes ago.";
    } else if(Date.now() - siteObj.lastUpdated > 86400000){
        timeString = "Checked over 24 hours ago.";
    }else {
        timeString = "Checked at " + dateString;
    }

    const deadSiteSvg = () => {
        return (
            <div className={styles.iconWrapper}>
                <DeadSite  className={styles.disabledIcon} />
            </div>
        );
    };





    return (
        <div className={styles.SiteObjectCard}>
            <div className={styles.SiteObjectCardFlex}>
                    {isDisabled ? deadSiteSvg() : randomSiteIcon()}
                <div>
                    <p className={isDisabled ? styles.DisabledSiteName : styles.SiteName}>{siteObj.siteName}</p>
                    <p className={isDisabled ? styles.DisabledSiteDescription : styles.SiteDescription}>{timeString}</p>
                </div>
            </div>
            <p className={isDisabled ? styles.DisabledSiteStatus : styles.SiteStatus}>{isDisabled?"OFFLINE":"ONLINE"}</p>
        </div>
    );
}