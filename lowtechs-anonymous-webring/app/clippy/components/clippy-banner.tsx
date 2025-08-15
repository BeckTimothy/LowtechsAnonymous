import styles from '../../page.module.css'
import Clippy from "@/app/icons/smolClippy.svg";

export default function WebringBanner() {

    const networkSvg = () => {
        return (
            <div className={styles.BannerClippyIconWrapper}>
                <Clippy  className={styles.titleIcon} />
            </div>
        );
    };

    return (
        <div className={styles.BannerWrapper}>
            <div className={styles.BannerRejectClippy}>
                <h1 className={styles.BannerTextClippyRight}>Reject<br/>Modernity</h1>
            </div>
            {networkSvg()}
            <div className={styles.BannerEmbraceClippy}>
                <h1 className={styles.BannerClippyTextLeft}>Embrace<br/>Clippy</h1>
            </div>
        </div>
    );
}

