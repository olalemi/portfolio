import * as React from 'react';
import photo from '../photo.JPG'
import {Toolbar, Typography} from '@mui/material';
// import {makeStyles} from '@material-ui/core/styles';


 function NavBar() {
  return (
    <div className=" md:flex  flex-row gap-x-8">
      

      
      <img  className=" w-24 rounded-md" src={photo} alt="myphoto" />
      
      
    
  <div className="flex flex-col gap-y-6 sm:mt-5 ">
       <div >
            <h1 className="text-2xl font-bold after:content-['']">Nurudeen Olalemi</h1>
        </div>
        <div >
          <ul className="flex flex-row flex-wrap gap-x-4 text-sm text-blue-800 hover:text-red-50">
            <li>PROJECTS</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
    </div>

  </div>
    


    </div>
  );
}

export default NavBar;