'use server';
import SiteIcon0 from '../../icons/liveSiteIcons/siteIcon0.svg'
import SiteIcon1 from '../../icons/liveSiteIcons/siteIcon1.svg'
import SiteIcon2 from '../../icons/liveSiteIcons/siteIcon2.svg'
import SiteIcon3 from '../../icons/liveSiteIcons/siteIcon3.svg'
import SiteIcon4 from '../../icons/liveSiteIcons/siteIcon4.svg'
import styles from '../../page.module.css';
import deadSite from "@/app/icons/deadSite.svg";
import Image from 'next/image';
import {FunctionComponent} from "react";

export default async function randomSiteIcon() {



    const SvgToPage = () => {
        let svgCount = 2
        switch(Math.floor(Math.random() * svgCount)){
            case 0:
                return (
                <div className={styles.iconWrapper}>
                    <SiteIcon0 className={styles.activeIcon} />
                </div>
                );
            case 1:
                return (
                    <div className={styles.iconWrapper}>
                        <SiteIcon1 className={styles.activeIcon} />
                    </div>
                );
            case 2:
                return (
                    <div className={styles.iconWrapper}>
                        <SiteIcon2 className={styles.activeIcon} />
                    </div>
                );
            case 3:
                return (
                    <div className={styles.iconWrapper}>
                        <SiteIcon3 className={styles.activeIcon} />
                    </div>
                );
            case 4:
                return (
                    <div className={styles.iconWrapper}>
                        <SiteIcon4 className={styles.activeIcon} />
                    </div>
                );
        }
    }
    return (
        <div className={styles.SiteName}>
            {SvgToPage()}
        </div>
    );
}