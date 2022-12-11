import React from 'react';
// import Button from "@mui/material/Button";
import { OpenInNew, GitHub } from '@mui/icons-material';
import sectionList from './SectionList';

const Section = ({ projectName, image, description, techUsed , githubLink, urlLink}) => {
  return (
    <div>
      <div className=" sm:mt-2 md:mt-8 flex  justify-around flex-col   md:flex-row gap-x-8 text-sm text-blue-800">
        <div>
          <img
            className=" min-w-lg mt-6 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300  border-solid border-2 border-blue-400  shadow-lg shadow-blue-500/50  md:w-full rounded-md"
            src={image}
            alt="myphotoo"
          />
        </div>

        <div className=" w-full   mt-6 rounded-md p-4 border-solid border-2 border-blue-400 bg-gray-100 shadow-lg shadow-blue-500/50 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105    w-rounded-md">
          <h1 className="flex gap-x-2 mt-6 font-bold text-xl">{projectName}</h1>

          <h3 className="flex gap-x-2 mt-6 text-justify  ">{description}</h3>

          <div className="flex flex-row justify-center flex-wrap gap-x-2 mt-6">
            <OpenInNew
              className="cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105"
              fontSize="medium"
              onClick={urlLink}
              
              color="primary"
            />
            <GitHub
              className="cursor-pointer transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105"
              fontSize="medium"
              onClick={githubLink}
           
              color="primary"
            />
          </div>

          <div className="flex flex-row flex-wrap gap-x-2 mt-6 justify-center ">
            {techUsed.map((sltu, i) => (
              <div>
                <button
                  key={i}
                  className="gap-x-2 mt-6 border-solid border-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 bg-blue-800 text-white p-2 rounded-md"
                  type="button "
                >
                  {sltu}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
