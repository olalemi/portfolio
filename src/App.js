import React from 'react';
import  NavBar from './components/NavBar';
import './App.css';
import HomeText from './components/HomeText';
import Section from './components/Section.Js';



function App() {
  return (
    <div className="sm:p-4 lg:px-96 lg:py-20">
      <NavBar />
      <div className="mt-4">
      <HomeText />
      </div>
     <Section/>
      
    </div>
   
    
  );
}

export default App;
