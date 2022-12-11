import { click } from '@testing-library/user-event/dist/click';

const sectionList = [
  {
    id: 0,
    projectName: 'Goggle Bookstore API',
    description:
      'A Front End task required to build  a smile listing page for HTML 5 books using Google Books API. The approach was to attempt a mobile first design to achieve mobile and desktop design in a single style sheet. Each book in the list should display the book cover, title, subtitle, all authors, number of pages and description.',
    techUsed: [
      
      'HTML & CSS',
      'Vanilla JS',
      'JSON API',
      
    ],
    projectImage: require('../images/googleapi.jpg'),
    urlLink: function () { 
        const url = (event) => window.open('https://olalemi.github.io/JD-induction--test/')
       return url
       
     },
     githubLink: function () { 
      const url = (event) => window.open('https://github.com/olalemi/JD-induction--test' )
     return url
     
   }

  },

  {
    id: 1,
    projectName: 'Robo Friends App',
    description:
      'A simple react project that fetches the list of robots and  their descripton from an API and populates it on a single web page.',
    techUsed: [
      'React.js',
      'Tachyons',
      
     
    ],
    projectImage: require('../images/robo.jpg'),
    urlLink: function onClick() { 
      const url = (event) => window.open('https://google.com' )
      return url
    },
    githubLink: function () { 
      const url = (event) => window.open('https://github.com/olalemi/Robo-friends' )
     return url
     
   }
  },

  {
    id: 2,
    projectName: 'Tip calculator App ',
    description:
      'A simple frontend app that calculates the Tip amount  of a user after a meal. It takes the value of the bill, Number of people amd Tip percentage and returns the Total Bill and Tip amount',
    techUsed: [
      
      'Vanilla JS',
      'ES6',
      'SCSS/SASS',
      
    ],
    projectImage: require('../images/tipcalc.jpg'),
    urlLink: function onClick() { 
      const url = (event) => window.open('https://olalemi.github.io/tip-calculator-app-main/' )
      return url
    },
    githubLink: function () { 
      const url = (event) => window.open('https://github.com/olalemi/tip-calculator-app-main' )
     return url
     
   }
  }
];

export default sectionList;
