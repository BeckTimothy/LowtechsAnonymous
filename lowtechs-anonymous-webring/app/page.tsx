export const revalidate = 3600;
import styles from "./page.module.css";

export default function Home() {

    const getNextAlaEvent = (today = new Date()) => {
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
        //Find offset from end of month to find last thursday
        let offset = 0;
        switch(lastDayOfMonth.getDay()){
            case 0:
                offset = -3;
                break;
            case 1:
                offset = -4;
                break;
            case 2:
                offset = -5;
                break;
            case 3:
                offset = -6;
                break;
            case 4:
                offset = 0;
                break;
            case 5:
                offset = -1;
                break;
            case 6:
                offset = -2;
                break;
        }
        //Find Last Thursday of this month
        let lastThursday = new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth()+1, offset, 18);
        //If last thursday of this month is before today, find next month's event
        if(lastThursday < today){
            return getNextAlaEvent(new Date(today.getFullYear(), today.getMonth()+1, 1));
        }
        //convert date to string and return shortened string
        let str = lastThursday.toString();
        let arr = str.split(' ').slice(0,5);
        return arr.join(' ');
    };
    const getTagLine = () =>{
        const options = [
            "Basement-born. Signal-bound. Tech unfiltered. Minds unmatched."
        ];

        return options[Math.floor(Math.random() * (options.length - 1))]
    }

    return (
        <div>
            <div className={styles.scanline}/>
            <div className={styles.crt}/>
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1 className={styles.titleFont}>ALA!</h1>
                    {/*<p className={styles.tagLine}>Nerds Seeking Sobriety From Tech Illiteracy</p>*/}
                    <p className={styles.dateText}>
                        {getTagLine()}
                        <br/><br/><br/>
                        Next Event:
                        <br/>
                        {getNextAlaEvent().toString()}
                        <br/><br/>
                        Do <i>YOU</i> have an <a href="/discord" rel="nofollow" className={styles.inviteLink}>invite?</a>
                    </p>
                </main>
            </div>
        </div>
    );
}
