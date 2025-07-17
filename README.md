# Lowtechs Anonymous

Albuquerque Lowtechs Anonymous (ALA!) is an underground hacker collective for cyber-security professionals and tech enthusiasts. We meet in the basement of a speakeasy once a month to share projects we're working on, drink, and talk tech. 

### Purpose:

This site is a lightweight next.js app using css animations to represent Lowtechs Anonymous's eclectic hacker nature and display the next event date, using next middleware to redirect users to important information, and using postgres and node.js to maintain and serve some of our projects.

### Sitemap: 

- `@/` Site Homepage, displays the date of next event
- `@/event` Redirects to the ALA! eventbrite page
- `@/discord` Redirects to the ALA! discord server invite
- `@/webring` Webring status page, displays the current status of sites registered for the webring


### TODO List: 
- [ ] Modernize requirements for being considered online
- [ ] Build specified update api
- [ ] Build update neighbors api
- [ ] Build SSR-proof crawler/health maintainer scripts w/ puppeteer or similar
- [ ] Wayback machine crawler/ auto archiver **/archive**
- [ ] Stylize text on mouseover and add event link to home
