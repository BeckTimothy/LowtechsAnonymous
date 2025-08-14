import styles from '../../page.module.css'
import Network from "@/app/icons/pixelatedNC2.svg";

export default function WebringBanner() {

    const networkSvg = () => {
        return (
            <div className={styles.BannerIconWrapper}>
                <Network  className={styles.titleIcon} />
            </div>
        );
    };

    return (
        <div className={styles.BannerWrapper}>
            <div className={styles.BannerTitleWrapper}>
                <h1 className={styles.BannerTitleText}>Lowtechs<br/>Anonymous</h1>
            </div>
            {networkSvg()}
            <div className={styles.BannerWebringWrapper}>
                <p className={styles.BannerWebringText}>Webring</p>
            </div>
        </div>
    );
}
