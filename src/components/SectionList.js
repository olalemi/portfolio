import { click } from '@testing-library/user-event/dist/click';

const sectionList = [
  {
    id: 0,
    projectName: 'ProShop',
    description:
      'A MERN stack e-commerce project built from ground up with React, Redux Toolkit, Express & MongoDB , and  PayPal / credit card integration as payment system',
    techUsed: [
      'React.js',
      'ES6',
      'JavaScript',
      'Express Js',
      'Redux Toolkit',
      'MongoDB',
      'Paypal API',
    ],

    projectImage: require('../assets/images/proshop.jpg'),
    urlLink: function () {
      const url = (event) => window.open('https://github.com/olalemi/proshop');
      return url;
    },
    githubLink: function () {
      const url = (event) => window.open('https://github.com/olalemi/proshop');
      return url;
    },
  },

  {
    id: 1,
    projectName: 'Fintech Web App ',
    description:
      'A fintech web app for a company that provides complete infrastructure and tools needed for African businesses to build, embed and launch financial products',
    techUsed: ['React.js', 'ES6', 'TypeSript', 'Express Js', 'SASS'],
    projectImage: require('../assets/images/anchor.jpg'),
    urlLink: function onClick() {
      const url = (event) => window.open('https://getanchor.co');
      return url;
    },
    githubLink: function () {
      const url = (event) => window.open('https://github.com/olalemi');
      return url;
    },
  },

  {
    id: 2,
    projectName: 'Muzz',
    description:
      ' A Fullstack web application implemenation of muzz web chat,client side implemented with React.js , socket.io library was used for the bi-directional communication between client and server  .',
    techUsed: [
      'React.js',
      'TypeSript',
      'ES6',
      'MongoDB',
      'Node.js',
      'Express Js',
      'Socket.IO',
      'Chakra UI',
    ],
    projectImage: require('../assets/images/muzz.jpg'),
    urlLink: function onClick() {
      const url = (event) => window.open('https://mymuzzchatapp.netlify.app/');
      return url;
    },
    githubLink: function () {
      const url = (event) =>
        window.open('https://github.com/olalemi/muzzfrontend');
      return url;
    },
  },

  {
    id: 3,
    projectName: 'AnyWork',
    description:
      'A comprehensive full-stack campaign website for a startup, designed to collect email addresses from potential users. The client-side is developed using React.js. .',
    techUsed: [
      'React.js',
      'TypeSript',
      'ES6',
      'Node.js',
      'MongoDB',
      'Express Js',
      'Chakra UI',
    ],
    projectImage: require('../assets/images/anywork.jpg'),
    urlLink: function onClick() {
      const url = (event) => window.open('https://useanywork.netlify.app/');
      return url;
    },
    githubLink: function () {
      const url = (event) => window.open('https://github.com/olalemi');
      return url;
    },
  },
  {
    id: 4,
    projectName: 'Gazetteer',
    description:
      'The task was to respond to a website specification for a map-based application that provides country-related information, with an emphasis on "mobile-first" development. The preferred approach involves using a framework to develop HTML, CSS, and JavaScript, incorporating JQuery modules that interact with PHP server-side components to retrieve data from third-party APIs like Geonames and OpenWeather.',
    techUsed: [
      'HTML/CSS',
      'JavaScript',
      'JQuery',
      "Bootstrap",
      'AJAX',
      "SQL",
      'PHP',
    ],
    projectImage: require('../assets/images/gazetteer.png'),
    urlLink: function onClick() {
      const url = (event) => window.open('http://gazetteer.free.nf/');
      return url;
    },
    githubLink: function () {
      const url = (event) => window.open('https://github.com/olalemi/nurudeenOlalemi/tree/main/project1');
      return url;
    },
  },
  {
    id: 5,
    projectName: 'Company Directory',
    description:
      'This application is designed as a "mobile-first" website, ensuring seamless functionality across both mobile devices and desktop computers. It will provide access to a database, enabling users to modify the data by adding, editing, or deleting entries. Additionally, the application will offer search capabilities within the database, allowing users to apply filters and use a search bar for more efficient queries',
    techUsed: [
      'HTML/CSS',
      'JavaScript',
      'JQuery',
      'AJAX',
      'PHP',
    ],
    projectImage: require('../assets/images/company_directory.png'),
    urlLink: function onClick() {
      const url = (event) => window.open('http://company-directory.free.nf/?i=1');
      return url;
    },
    githubLink: function () {
      const url = (event) => window.open('https://github.com/olalemi/nurudeenOlalemi/tree/main/project2');
      return url;
    },
  },
];

export default sectionList;
