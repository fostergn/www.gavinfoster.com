import chmCreateBrowser from './images/chm-create-browser.png';
import chmSentBrowser from './images/chm-sent-browser.png';
import chmReceiptsBrowser from './images/chm-receipts-browser.png';
import chmDashboardMobile from './images/chm-dashboard-mobile.png';

import holidayGamesBrowser from './images/holiday-games-browser.png';
import holidayGiftBrowser from './images/holiday-gift-browser.png';
import findingGiftBrowser from './images/finding-gift-browser.png';
import holidayGamesMobile from './images/holiday-games-mobile.png';

import chmCoverImage from './images/business-stock.jpg';
import holidayCoverImage from './images/holiday-cover.png';
import portrait from './images/portrait.jpg';

const projects = [
  {
    name: 'lottery',
    title: 'VA Lottery Holiday Games',
    description: `The project is a quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span> 📹. Users' answers are pushed to a Firebase realtime database 🔥`,
    imgs: [holidayGamesBrowser, holidayGiftBrowser, findingGiftBrowser, holidayGamesMobile],
    // imgs: [holidayGiftBrowser, findingGiftBrowser, holidayGamesMobile],
    cover: holidayCoverImage,
    backgroundColor: 'rgba(200, 200, 255, 1)',
    backgroundColorBorder: 'rgba(200, 200, 255,.6)',
  },
  {
    name: 'internal messaging tool',
    title: 'Internal Messaging Tool',
    description: `The messaging tool allows managers to message their team and coworkers. Connecting <span class="highlight--orange">Drupal</span>, an ERM, and <span class="highlight--blue">Twilio</span> allows for sending and tracking <span class="underline--blue">MMS</span> that helps foster a rapidly growing company's culture.`,
    imgs: [chmCreateBrowser, chmSentBrowser, chmReceiptsBrowser, chmDashboardMobile],
    cover: chmCoverImage,
    backgroundColor: 'rgba(200, 200, 255, 1)',
    backgroundColorBorder: 'rgba(200, 200, 255,.6)',
  },
];

export default projects;
