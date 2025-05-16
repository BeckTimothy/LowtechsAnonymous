import {SiteObject} from "@/app/lib/definitions";
import styles from '../../page.module.css';
import DeadSite from '../../icons/deadSite.svg';
import LiveSite from '../../icons/online.svg';

export default function siteHealthDisplay(siteObj: SiteObject) {
    let isDisabled = !siteObj.isLive || !siteObj.isValid;

    const getTimeString = (siteObj: SiteObject) => {
        //build date/time string of last site checkup
        let timeString;
        let timeDiff = Date.now() - Number(siteObj.lastUpdated);
        if(timeDiff < 600000){
            timeString = "Checked less than 10 minutes ago.";
        }else if(timeDiff > 86400000){
            timeString = "Checked over 24 hours ago.";
        }else {
            let dateArr = new Date(Number(siteObj.lastUpdated)).toTimeString().split(' ');
            let dateString = dateArr[0];
            timeString = "Checked at " + dateString;
        }
        return timeString;
    }

    const deadSiteSvg = () => {
        return (
            <div className={styles.iconWrapper}>
                <DeadSite  className={styles.disabledIcon} />
            </div>
        );
    };
    const liveSiteSvg = () => {
        return (
            <div className={styles.iconWrapper}>
                <LiveSite  className={styles.activeIcon} />
            </div>
        );
    };
    const siteURL = "https://"+siteObj.siteName;
    return (
        <div className={styles.SiteObjectCard}>
            <div className={styles.SiteObjectCardFlex}>
                    {isDisabled ? deadSiteSvg() : liveSiteSvg()}
                <div>
                    <a href={siteURL}><p className={isDisabled ? styles.DisabledSiteName : styles.SiteName} >{siteObj.siteName}</p></a>
                    <p className={isDisabled ? styles.DisabledSiteDescription : styles.SiteDescription}>{getTimeString(siteObj)}</p>
                </div>
            </div>
            <p className={isDisabled ? styles.DisabledSiteStatus : styles.SiteStatus}>{isDisabled?"OFFLINE":"ONLINE"}</p>
        </div>
    );
}