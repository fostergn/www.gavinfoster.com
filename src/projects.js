import chmCreateBrowser from './images/chm-create-browser.png';
import chmSentBrowser from './images/chm-sent-browser.png';
import chmReceiptsBrowser from './images/chm-receipts-browser.png';
import chmDashboardMobile from './images/chm-dashboard-mobile.png';

import holidayGamesBrowser from './images/holiday-games-browser.png';
import holidayGiftBrowser from './images/holiday-gift-browser.png';
import findingGiftBrowser from './images/finding-gift-browser.png';
import holidayGamesMobile from './images/holiday-games-mobile.png';

import statusOne from './images/status-one.png';
import statusIncident from './images/status-incident.png';
import statusKue from './images/status-kue.png';
import statusTwo from './images/status-two.png';

import portfolioHome from './images/portfolio-home.png';
import portfolioSingle from './images/portfolio-single.png';
import portfolioChat from './images/portfolio-chat.png';
import portfolioChatMobile from './images/portfolio-chat-mobile.png';

import adminDashboard from './images/admin-dashboard.png';
import adminConvo from './images/admin-convo.png';
import adminLogin from './images/admin-login.png';
import adminSearch from './images/admin-search.png'

import adminCoverImage from './images/admin-cover.jpg';
import portfolioCoverImage from './images/portfolio-cover-image.jpg';
import statusCoverImage from './images/status-cover.jpg';
import chmCoverImage from './images/business-stock.jpg';
import holidayCoverImage from './images/holiday-cover.jpg';
import portrait from './images/portrait.jpg';

const projects = [
  {
    name: 'lottery',
    title: 'VA Lottery Holiday Games',
    description: `The project is a quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span>. Users' answers are pushed to a Firebase realtime database`,
    imgs: [holidayGamesBrowser, holidayGiftBrowser, findingGiftBrowser, holidayGamesMobile],
    // imgs: [holidayGiftBrowser, findingGiftBrowser, holidayGamesMobile],
    cover: holidayCoverImage,
  },
  {
    name: 'internal messaging tool',
    title: 'Internal Messaging Tool',
    description: `The messaging tool allows managers to message their team and coworkers. Connecting <span class="highlight--orange">Drupal</span>, an ERM, and <span class="highlight--blue">Twilio</span> allows for sending and tracking <span class="underline--blue">MMS</span> that helps foster a rapidly growing company's culture.`,
    imgs: [chmCreateBrowser, chmSentBrowser, chmReceiptsBrowser, chmDashboardMobile],
    cover: chmCoverImage,
  },
  {
    name: 'status',
    title: 'Portfolio Status',
    description: `The status page has live updates, response time graph, and live video feed to give a general sense of the status of Gavin Foster and his portfolio. It uses a combination of a raspberry pi, three.js, vue, node, websockets, redis, and kue.`,
    imgs: [statusOne, statusIncident, statusKue, statusTwo],
    cover: statusCoverImage,
  },
  {
    name: 'portfolio',
    title: 'Portfolio Site',
    description: `This is the site that you're on right now. It is built with React and uses Firebase to store messages for the chat application. The drawing pad is just a vanilla canvas element.`,
    imgs: [portfolioHome, portfolioSingle, portfolioChat, portfolioChatMobile],
    cover: portfolioCoverImage
  },
  {
    name: 'admin',
    title: 'Portfolio Admin',
    // description: `The status page has live updates, response time graph, and live video feed to give a general sense of the status of Gavin Foster and his portfolio. It uses a combination of a raspberry pi, three.js, vue, node, websockets, redis, and kue.`,
    description: `The admin site allows Gavin to respond to conversations. Gavin spun up a Node server and uses Twilio, so that if he isn't logged in messages get sent to his phone where he can respond. The site also uses the same tech as his <a href="portfolio">portfolio</a>`,
    imgs: [adminDashboard, adminConvo, adminLogin, adminSearch],
    cover: adminCoverImage
  },
];

export default projects;
