import lotteryImage from './images/holiday-games.png';
import lotteryImage2 from './images/holiday-games2.png';
import lotteryImage3 from './images/holiday-games3.png';
import holidayCoverImage from './images/holiday-cover.png';
import portrait from './images/portrait.jpg';

const projects = [
  {
    name: 'lottery',
    title: 'VA Lottery Holiday Games',
    description: `The project is a quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span> 📹. Users' answers are pushed to a Firebase realtime database 🔥`,
    imgs: [lotteryImage, lotteryImage2, lotteryImage3],
    cover: holidayCoverImage,
    backgroundColor: 'azure',
  },
  {
    name: 'portfolio-client',
    title: 'Portfolio Client',
    description: `The project is a quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span> 📹. Users' answers are pushed to a Firebase realtime database 🔥`,
    imgs: [portrait, lotteryImage],
    cover: portrait,
    backgroundColor: 'aliceblue',
  },
  {
    name: 'portfolio-admin',
    title: 'Portfolio Admin',
    description: `The project is a quiz of random holiday questions that generates a lottery scratcher based on answers. The site uses <span class="highlight--blue">React</span> and <span class="highlight--purple">Redux</span> to handle <span class="underline--blue">state</span> and <span class="highlight--orange">GSAP</span> to create <span class="underline--orange">animations</span> 📹. Users' answers are pushed to a Firebase realtime database 🔥`,
    imgs: [lotteryImage, portrait],
    cover: portrait,
    backgroundColor: 'beige',
  },
];

export default projects;
