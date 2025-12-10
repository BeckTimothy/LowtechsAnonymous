# Lowtechs Anonymous

Albuquerque Lowtechs Anonymous (ALA!) is an underground hacker collective for cyber-security professionals and tech enthusiasts. We meet in the basement of a speakeasy once a month to share projects we're working on, drink, and talk tech. 

### Purpose:

This site is a lightweight next.js app using css animations to represent Lowtechs Anonymous's eclectic hacker nature and display the next event date, using next middleware to redirect users to important information, and using postgres and node.js to maintain and serve some of our projects.

### Sitemap: 

- `@/` Site Homepage, displays the date of next event
- `@/event` Redirects to the ALA! eventbrite page
- `@/discord` Redirects to the ALA! discord server invite
- `@/webring` Webring status page, displays the current status of sites registered for the webring
- `@/clippy` A manifesto touching on the modern web and privacy

### TODO List: 
- [ ] Modernize requirements for webring clients being considered online
- [ ] Build specified update api
- [ ] Build update neighbors api
- [ ] Build SSR-proof crawler/health maintainer scripts w/ puppeteer or similar
- [ ] Wayback machine crawler/ auto archiver **/archive**
- [ ] Finish deployment guide and add to README 



### Breach Disclaimer
Due to this site using React 19.0.0 and Next 15.3.4, we were briefly vulnerable to CVE-2025-55182 React2Shell. On 2025 December 4th at approximately 10:30pm MT threat actors autopwned our site and turned it into a crypto mining slave. In the 16.5 hours it was mining, before it was noticed and resolved, it generated the hacker exactly 0.005249 XMR (roughly $2.35usd) through the chinese mining pool c3pool on wallet `8748cigrtHj9uB4voKKQd67PAG1crVAR4Y9G6Ku2s42UFx1RVbnDCBH7Dc9c8sYGvE5yhM5pniJNs86ki3hPk1wQDtePjRX`.



