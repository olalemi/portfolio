import React from 'react';
import Section from './Section';
import sectionList from './SectionList';

const Project = () => {
  return (
    <div>
      <div>
        {sectionList.map((sl, i) => (
          <div key={i}>
            <Section
              projectName={sl.projectName}
              description={sl.description}
              image={sl.projectImage}
              techUsed={sl.techUsed}
              urlLink={sl.urlLink()}
              githubLink={sl.githubLink()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
