import lotteryImage from './images/holiday-games.png';
import portrait from './images/portrait.jpg';

const projects = [
  {
    name: 'lottery',
    title: 'VA Lottery Holiday Games',
    description: `Quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span> 📹. User's answers are pushed to a Firebase realtime database 🔥`,
    imgs: [lotteryImage, lotteryImage],
  },
  {
    name: 'portfolio-client',
    title: 'Portfolio Client',
    description: 'here it goes are you ready',
    imgs: [portrait, lotteryImage],
  },
  {
    name: 'portfolio-admin',
    title: 'Portfolio Admin',
    description: 'here it goes are you ready',
    imgs: [lotteryImage, portrait],
  },
];

export default projects;
