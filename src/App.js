import {Fragment} from 'react';
import NavBar from './components/NavBar';
import HomeText from './components/HomeText';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="sm:p-6 md:px-10 md:py-20 xl:px-60 xl:py-20 bg-blue-50">
      <NavBar />
      <div className="sm:mt-8 lg:mt-16 ">
        <HomeText />
      </div>
      <div className="sm:mt-8 lg:mt-16">
        <h1
          className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  "
          id="project"
        >
          PROJECTS
        </h1>
        <div>
          <Project />
        </div>
      </div>

      <div className="sm:mt-8 lg:mt-16">
        <Contact />
      </div>
      

      <div className="sm:mt-32 lg:mt-64">
        <Footer />
      </div>
      
      
      
    </div>
  );
}

export default App;
