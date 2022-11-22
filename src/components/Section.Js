import React from "react";
// import Button from "@mui/material/Button";
import {OpenInNew, GitHub}from '@mui/icons-material';



import tipcalc from "../images/tipcalc.jpg";

const Section = (props) => {


const title = props.title;

  return (
    <div >
      <h1 className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  " id="project"> PROJECTS</h1>

      <div className=" mt-8 flex  justify-around flex-col   md:flex-row gap-x-8 text-sm text-blue-800">
        <div>
        <img className="  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300  border-solid border-2 border-blue-400  shadow-lg shadow-blue-500/50  md:w-full rounded-md" src={tipcalc} alt="myphotoo" />

        </div>
        
          <div className=" rounded-md p-4 border-solid border-2 border-blue-400 bg-gray-100 shadow-lg shadow-blue-500/50 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105    w-rounded-md">
            <h1 className="flex gap-x-2 mt-6 font-bold text-xl">Project 1</h1>



               <h3 className="flex gap-x-2 mt-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
               fugiat nulla pariatur</h3>

               <h3 className="flex gap-x-2 mt-6 text-justify">{ title }</h3>

               <div className="flex flex-row  justify-center flex-wrap gap-x-2 mt-6" >
               <OpenInNew className="cursor-pointer transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105"  fontSize="medium"  onClick={event =>  window.open('https://fonts.googleapis.com/icon?family=Material+Icons')} color="primary" />
              <GitHub className="cursor-pointer transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105" fontSize="medium" onClick={event =>  window.open('https://fonts.googleapis.com/icon?family=Material+Icons')} color="primary" />
               </div>
          

              <div className="flex flex-row flex-wrap gap-x-2 mt-6 justify-center " >
              <button className="gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md" type="button ">React</button>
              <button className=" gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md" type="button ">Javascript</button>
              <button className="gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md" type="button ">HTML/CSS</button>
              <button className=" gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md" type="button ">Tailwind CSS </button>
              <button className=" gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md" type="button ">Node.Js</button>
              </div>
          
             
            
          </div>
      </div>
    </div>
  );
};

export default Section;
