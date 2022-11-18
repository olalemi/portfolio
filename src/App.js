import React from 'react';
import  NavBar from './components/NavBar';
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomeText from './components/HomeText';
import Section from './components/Section.js';
import Contact from './components/Contact';



function App() {
  return (
    <div className="sm:p-4 md:px-20 md:py-20 xl:px-80 xl:py-20 bg-blue-50">
      <NavBar />
      <div className="sm:mt-8 lg:mt-16">
      <HomeText />
      </div>
      <div className="sm:mt-8 lg:mt-16">

      <Section />

      </div>

      <Contact/>
    
      
    </div>
   
    
  );
}

export default App;
