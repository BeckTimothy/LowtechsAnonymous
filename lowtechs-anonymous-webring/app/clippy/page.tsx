import styles from '../page.module.css';
import {SiteObject} from "@/app/lib/definitions";
import ClippyBanner from "@/app/clippy/components/clippy-banner";


export default async function Page() {
    

    return (
        <div>
            <div className={styles.scanline}/>
            <div className={styles.crt}/>
            <main className={styles.SiteWrapper}>
            <ClippyBanner />
            <div className={styles.Manifesto}>
                <h2>¡A La Verga, Not A Manifesto!</h2>
                <p className={styles.blogDate}>Revision 2 - 2025-08-15</p>
                <div className={styles.ManifestoBody}>
                    <h3>&gt;The Web of Old</h3>
                    <p>Growing up, our parents told us to never put our real names, addresses, photos, or any identifying information on the internet. This was a common sentiment shared by everyone that used the internet in a time when few did. With privacy, through anonymity, and less-so but still so behind pseudonyms; ideas flourish, free from bias and identity-based discrimination. A five year old, an eighty year old, a black American, a white Mexican, a billionaire, and a homeless person could all share ideas online and each would be interacted with equality and by the credibility and quality of their ideas. Anonymity is the great equalizer.<br/>
                        <br/>
                    Everyone who had anything to say shared their interests and hobbies on custom websites, geocities, or topic relevant forums. The internet was a constructive place filled with makers, tinkerers, artists, and hackers whose ideas transcend their identity. The internet brimmed with people who cared about sharing their passions, and people who wanted to learn. It was a place for learners, builders, and sharers; for people like us. I don’t intend to look back with rose-tinted glasses at an internet built by people like us; it still is built by people like us. This isn’t about a change in time, it’s about a change in minds. The internet still can be a tool to share ideas free from the ire of society, without bias or burden, to share passions and learn; but it takes builders. <br/>
                        <br/>
                    With past builders emerged apps which aimed to offer valuable services to consumers, solve problems, and make our lives easier. Consumers were ecstatic to pay for these new opportunities and tools, and builders were eager to make the tools the best they could be.</p>
                </div>
                <div className={styles.ManifestoBody}>
                    <h3>&gt;Internet Enshittified</h3>

                    <p>Along the way some of these builders sold out or became corrupted by greed. Web services eroded. Through the centralization of vast internet boards into the same five apps that users ceaselessly doomscroll. Through the deliberate removal of features within those internet services for them just to reemerge as additional cost features. Through the faltering of consumer protections making way for profit driven legislation. Through the inclusion of fingerprinting, tracking pixels, and canvas elements in every site that feeds advertisers, information brokers, and intelligence agencies valuable private user data. Through legislation of anti-encryption acts that seek to silence speech, punish dissent, and control narrative. Through the anti-privacy legislation which seeks to track everyone everywhere and everything they do. Web services have eroded into ones that only serve as tools to build capital for corporations, no longer about building something that helps people.<br/>
                        <br/>
                    The City of Albuquerque has over 10,000 video feeds pushed through the Real-Time Crime Center. None of this data is stored by our City/State, it’s stored by private businesses. Our State and City are paying multiple private businesses gobs of money to track our population as they move through the city. Those private businesses are able to leverage that information however they want. You may think that APD will be able to track criminals who victimize you across the city and arrest them, but they don’t. They won’t, they won’t even respond. Advertisers, however, will track you across the city. This loss of privacy doesn’t help you, it harms you.<br/>
                        <br/>
                    The UK just passed their Online Safety Act requiring online services to require ID to use certain features. Some US states have passed similar legislation. Australia, Canada, and other countries are pushing for similar legislation. Corporations in the Intelligence, Social Media, and Advertising industries are salivating at these opportunities and lobbying for these changes which erode the privacy of users everywhere, not just in the UK. You think the Tea app users whose IDs are sitting on my desktop, whose IDs are freely available to download for all, wanted that? This loss of privacy doesn’t protect children, it doesn’t protect you. It harms you.<br/>
                        <br/>
                    Wake up, it’s 2025 and privacy is dying; human interaction is a commodity, and corporations crave your attention. Don’t let privacy die, for if it is lost, it can’t be reclaimed.</p>
                </div>
                <div className={styles.ManifestoBody}>
                    <h3>&gt;Reject Modernity</h3>
                    <p>Revolt against modern services.<br/><br/></p>
                    <ul>
                        <li>Uninstall apps and delete your accounts.</li>
                        <li>Replace apps with open-source or self-hosted alternatives.</li>
                        <li>Degoogle yourself.</li>
                        <li>Switch to Linux.</li>
                        <li>Block telemetry with custom DNS or PiHole.</li>
                        <li>Block Shorts, Insta, Tiktok and other apps that have you mindless.</li>
                        <li>Replace your subscriptions.</li>
                        <li>Self-host as much as humanly possible.</li>
                        <li>Contribute to Open Source, EFF, IEEE, Wikipedia, Internet Archive.</li>
                        <li>Contact your representatives.</li>
                    </ul><br/><br/>
                    <p>There’s so much you can do to impede your loss of privacy and to promote a more privacy-centric perspective within our community. There’s so much you can do to contribute to freedom, to privacy, to consumer protections. It starts with learning, and building, and doing something.</p>
                </div>
                <div className={styles.ManifestoBody}>
                <h3>&gt;Embrace Clippy</h3>

                <p>Clippy just wanted to help.<br/>
                <br/>
                Clippy didn’t track you across the city. <br/>Clippy didn’t collect and sell data on who enters or exits your home. <br/>Clippy didn’t collect and sell data on your web traffic, texts, emails, phone calls. <br/>Clippy didn’t try to decide which advertisements to serve you. <br/>Clippy didn’t ask for age verification, ID, or your location. <br/>Clippy didn’t have ulterior motives, he just wanted to help.<br/>
                <br/>
                Embrace Clippy by changing your profile picture across every service to a Clippy.</p>
                </div>
                <div className={styles.ManifestoBody }>
                    <h3>&gt;Call your Representatives</h3>

                    <p>Phone calls are the most effective way to influence your representatives. <br/><br/>Here’s why:</p>
                    <ul>
                        <li>Detailed Logs: Staffers log every call by topic, location, and zip code.</li>
                        <li>Daily Reports: Senior staff compile reports on the top issues being called about each day.</li>
                        <li>Direct Impact: These reports are sent directly to elected officials, clearly showing which issues voters care about and where the pressure is coming from.</li>
                    </ul><br/><br/><br/>

                    <h4>Senator Martin Heinrich</h4>
                    <a className={styles.inviteLink} href="https://www.heinrich.senate.gov/contact">Web Contact Form</a><br/>
                    <p className={styles.RepData}>Address:&nbsp;</p><p className={styles.RepData}>09 Hart Senate Office Building, Washington DC 20510</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(202) 224-5521</p><br/><br/>

                    <h4>Senator Ben Ray Luján</h4>
                    <a className={styles.inviteLink} href="https://www.lujan.senate.gov/contact/">Web Contact Form</a><br/>
                    <p className={styles.RepData}>Address:&nbsp;</p><p className={styles.RepData}>498 Russell Senate Office Building, Washington DC 20510</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(202) 224-6621</p><br/><br/>

                    <h4>1st District Representative Melanie A. Stansbury</h4>
                    <a className={styles.inviteLink} href="https://stansbury.house.gov/contact">Web Contact Form</a><br/>
                    <p className={styles.RepData}>DC Address:&nbsp;</p><p className={styles.RepData}>1421 Longworth House Office Building, Washington, DC  20515</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(202) 225-6316</p><br/>
                    <p className={styles.RepData}>ABQ Address:&nbsp;</p><p className={styles.RepData}>6301 Indian School Rd, Suite 420, Albuquerque , NM  87110</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(505) 346-6781</p><br/><br/>

                    <h4>2nd District Representative Gabe Vasquez</h4>
                    <a className={styles.inviteLink} href="https://vasquez.house.gov/address_authentication?form=/contact">Web Contact Form</a><br/>
                    <p className={styles.RepData}>ABQ Address:&nbsp;</p><p className={styles.RepData}>201 Unser Blvd. NW, Unit 116, Albuquerque, NM  87121</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(505) 208-4777</p><br/>
                    <p className={styles.RepData}>DC Address:&nbsp;</p><p className={styles.RepData}>322 Cannon House Office Building, Washington, DC  20515</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(202) 225-2365</p><br/><br/>

                    <h4>3rd District Representative Teresa Leger Fernandez</h4>
                    <a className={styles.inviteLink} href="https://fernandez.house.gov/contact/">Web Contact Form</a><br/>
                    <p className={styles.RepData}>Santa Fe Address:&nbsp;</p><p className={styles.RepData}>120 S Federal Pl, Suite 323, Santa Fe, NM  87501</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(505) 428-4680</p><br/>
                    <p className={styles.RepData}>DC Address:&nbsp;</p><p className={styles.RepData}>2417 Rayburn House Office Building, Washington, DC  20515</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(202) 225-6190</p><br/><br/>

                    <h4>Governor Michelle Lujan Grisham</h4>
                    <a className={styles.inviteLink} href="https://www.governor.state.nm.us/contact-the-governor/">Web Contact Form</a><br/>
                    <p className={styles.RepData}>Address:&nbsp;</p><p className={styles.RepData}>490 Old Santa Fe Trail, Room 400, Santa Fe, NM 87501</p><br/>
                    <p className={styles.RepData}>Phone:&nbsp;</p><p className={styles.RepData}>(505) 476-2200</p><br/>
                </div>
                </div>
            </main>
        </div>
    );
}
async function fetchSitesWithRevalidation(): Promise<SiteObject[]> {
    const res = await fetch("http://localhost:3000/api/webring", {
        next: { revalidate: 15 }
    } as any);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}

