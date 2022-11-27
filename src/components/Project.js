import React from "react";
import Section from "./components/Section.js";
import sectionList from "./components/SectionList.js";  

const Project = (props) => {
  const projectComponent = sectionList.map((item, i) => {
    return (
      <Section
        projectName={sectionList[i].projectName}
        techUsed={sectionList[i].description}
        Image={sectionList[i].projectImage}
      />
    );
  });

  return <div>{projectComponent}</div>;
};

export default Project;
