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
];

export default sectionList;
