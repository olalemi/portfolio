import React from 'react';
import  NavBar from './components/NavBar';
import './App.css';
import HomeText from './components/HomeText';
import Section from './components/Section.js';
import Contact from './components/Contact';
import {tipcalc,googleapi} from "src/images";




function App() {
  return (
    <div className="sm:p-6 md:px-10 md:py-20 xl:px-60 xl:py-20 bg-blue-50" >
      <NavBar />
      <div className="sm:mt-8 lg:mt-16 " >
      <HomeText  />
      </div>
      <div className="sm:mt-8 lg:mt-16"  >

      <Section Image={tipcalc} title="my test"/>

      <Section Image={googleapi} title="my test 2"/>

      </div>

      <div className="sm:mt-8 lg:mt-16">
      <Contact />
      </div>
   
    
      
    </div>
   
    
  );
}

export default App;
