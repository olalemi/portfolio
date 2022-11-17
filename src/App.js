import React from 'react';
import  NavBar from './components/NavBar';
import './App.css';
import HomeText from './components/HomeText';
import Section from './components/Section.js';



function App() {
  return (
    <div className="sm:p-4 lg:px-96 lg:py-20">
      <NavBar />
      <div className="mt-6">
      <HomeText />
      </div>
      <div className="mt-6">

      <Section />

      </div>
    
      
    </div>
   
    
  );
}

export default App;
