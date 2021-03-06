import noblemenJpg from "../assets/Noblemen.jpg"
import compTechAd from "../assets/comp-tech ad.jpg"
import fccIcon from "../assets/fcc icon.png"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sample = [
    {
      img: 'string',
      title: 'string',
      current: false,
      sub: 'string',
      tags: [
        'string',
        'string'
      ],
      text: 'string',
      link: [
        {
          name: 'string',
          href: 'string'
        },
        {
          name: 'string',
          href: 'string'
        }
      ],
    }
]

const experiences = [
  {
    img: noblemenJpg,
    title: 'Web Developer',
    current: true,
    sub: 'Noblemen LLC',
    tags: [
      'Programming',
      'Web Development',
      'MERN Stack'
    ],
    text: `Based in Arizona, USA, I received my very first remote and contractual job in web development, as a freshman college student (April. 2022 – Present) • Developed multiple admin web-app components and compositions with React, Redux and Axios • Emulated designated UI/UX designs from Figma with Ant Design framework for front-end development • Wrote RESTful APIs to be integrated to web applications with Node.js, Express and MongoDb`
  },
  {
    img: compTechAd,
    title: 'PC Technician, Self-Employed',
    current: false,
    sub: 'Computer Repair Home Service',
    tags: [
      'Computer Diagnostics',
      'Computer Troubleshooting',
      'Customer Service'
    ],
    text: 'My side-job since I was a 1st year shs student (Feb. 2020 – Feb. 2022) • Fixed unique cases of broken computers in terms of hardware or software • Completed 50+ customer appointments with flexibility in time and different locations • Prioritized communication with customers to stay apprised of the changes in their computers • Generated all social media ad posts, including forums and posters'
  }
]

const projects = [
	{
        img: 'https://raw.githubusercontent.com/suntoes/burgor/master/client/public/burgor.png',
        title: 'burgor',
        tags: [
          'MERN Stack',
          'chakra-ui',
          'framer-motion',
          'swiper.js',
          'three.js'
        ],
        text: 'A website demo of burger shop made with MERN stack done in a single day. The result is simple but compact in features and responsive in layout.',
        link: [
          {
            name: 'Github',
            href: 'https://github.com/suntoes/burgor'
          },
          {
            name: 'Live demo',
            href: 'https://burgor.herokuapp.com/'
          }
        ],
    },
    {
        img: 'https://raw.githubusercontent.com/suntoes/diw4/master/client/public/icon.png',
        title: 'diw4',
        tags: [
          'MERN Stack',
          'chakra-ui',
          'socket.io',
          'framer-motion',
          'three.js'
        ],
        text: 'A very simple demo of create & read scroller app. I plan experiment and add more features in future.',
        link: [
          {
            name: 'Github',
            href: 'https://github.com/suntoes/diw4'
          },
          {
            name: 'Live demo',
            href: 'https://diw4.herokuapp.com/'
          }
        ],
    },
    {
      img: 'https://raw.githubusercontent.com/suntoes/bot-RandomThoughts/master/src/img/icon.png',
      title: 'bot/RandomThoughts',
      tags: [
        `Node.js`,
        `Firebase`,
        `MongoDb`,
        `Web Scrapping`,
        `twitter-api-v2`
      ],
      text: `Developed a server that tweets web scraped data for every minute. It automatically filter and scrape the newest posts in r/RandomThoughts of reddit. I was able to run it 24/7 for free with heroku and cron-job.org for more than 2 weeks.`,
      link: [
        {
          name: 'Github',
          href: 'https://github.com/suntoes/bot-RandomThoughts'
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/_r4ndomthoughts'
        }
      ],
    },
    {
        img: 'https://raw.githubusercontent.com/suntoes/sudoku-matrix/master/public/sdku-mtrx-icon.png',
        title: 'sudoku matrix',
        tags: [
          'React',
          'TypeScript'
        ],
        text: `A sudoku solver and visualizer at the same time. I was able to develop my own backtracking algorithm through a lot of recursion and also undos on my code editor.`,
        link: [
          {
            name: 'Github',
            href: 'https://github.com/suntoes/sudoku-matrix'
          },
          {
            name: 'Live demo',
            href: 'https://sudoku-matrix.herokuapp.com/'
          }
        ],
    },
    {
        img: 'https://raw.githubusercontent.com/suntoes/ez-tetris-online/master/utils/ez-tetris.jpg',
        title: 'ez tetris online',
        tags: [
            'JavaScript',
            'Node.js',
            'MongoDb',
            'Express',
            'socket.io',
        ],
        text: `If there's a snake game, there should exist a tetris too I've thought. Hence, that is why I developed a fully functional online tetris game where players can match 1 on 1 real time. I used a lot of array and DOM manipulation here. See to my github repo for more explanation.`,
        link: [
          {
            name: 'Github',
            href: 'https://github.com/suntoes/ez-tetris-online'
          },
          {
            name: 'Live demo',
            href: 'https://ez-tetris-online.suntoes.repl.co/'
          }
        ],
    },
    {
        img: 'https://raw.githubusercontent.com/suntoes/ez-snek-game/master/resources/logo.png',
        title: 'ez snek online',
        tags: [
            'JavaScript',
            'Node.js',
            'MongoDb',
            'Express',
            'socket.io',
        ],
        text: `My very first personal JavaScript project/challenge turned online with Node.js. I've also listed the (3) key functions I've made here in the git hub repo of the offline version for your reference.`,
        link: [
          {
            name: 'Github (Online)',
            href: 'https://github.com/suntoes/ez-snek-online'
          },
          {
            name: 'Github (Offline)',
            href: 'https://github.com/suntoes/ez-snek-game'
          },
          {
            name: 'Live demo',
            href: 'https://ez-snek-online.suntoes.repl.co/'
          }
        ],
    },
    {
        img: 'https://raw.githubusercontent.com/suntoes/suntoes/master/public/m.png',
        title: 'my portfolio',
        tags: [
            'React',
            'chakra-ui',
            'framer-motion',
            'three.js'
        ],
        text: `It feels like a waste if I didn't jot this website down. So here are the resources.`,
        link: [
          {
            name: 'Github',
            href: 'https://github.com/suntoes/suntoes'
          }
        ],
    }
]

const trainings = [
    {
      img: fccIcon,
      title: 'Back End Development and APIs',
      sub: 'in freeCodeCamp.org/learn',
      tags: [
        'Node.js',
        'Npm',
        'MongoDb',
        'Express'
      ],
      link: [
        {
          name: `fCC Certificate`,
          href: 'https://www.freecodecamp.org/certification/suntoes/back-end-development-and-apis'
        }
      ],
    },
    {
      img: fccIcon,
      title: 'Front End Development Libraries',
      sub: 'in freeCodeCamp.org/learn',
      tags: [
        'Bootstrap',
        'Sass',
        'React',
        'Redux'
      ],
      link: [
        {
          name: `fCC Certificate`,
          href: 'https://www.freecodecamp.org/certification/suntoes/front-end-development-libraries'
        }
      ],
    },
    {
      img: fccIcon,
      title: 'Javascript Algorithms and Data Structures',
      sub: 'in freeCodeCamp.org/learn',
      tags: [
        'JavaScript'
      ],
      link: [
        {
          name: `fCC Certificate`,
          href: 'https://www.freecodecamp.org/certification/suntoes/javascript-algorithms-and-data-structures'
        }
      ],
    },
    {
      img: fccIcon,
      title: 'Responsive Web Design',
      sub: 'in freeCodeCamp.org/learn',
      tags: [
        'HTML/CSS'
      ],
      link: [
        {
          name: `fCC Certificate`,
          href: 'https://www.freecodecamp.org/certification/suntoes/responsive-web-design'
        }
      ],
    }
]

export { experiences, projects, trainings }
