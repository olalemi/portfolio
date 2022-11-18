import * as React from 'react';
import { Document, Page } from 'react-pdf';
import Resume from '../Resume.pdf';
import photo from '../photo.JPG'
// import {Toolbar, Typography} from '@mui/material';
import {Link} from 'react-scroll';


 function NavBar() {
  return (
    <div className=" md:flex  flex-row gap-x-8">
      

      
      <img  className=" w-24 rounded-full " src={photo} alt="myphoto" />
      
      
    
  <div className="flex flex-col gap-y-6 sm:mt-4">
       <div >
            <h1 className="text-2xl font-bold ">Nurudeen Olalemi</h1>
        </div>
        <div >
                          
                        
      <ul className="flex flex-row flex-wrap sm:text-sm md:text-xl text-grey-50 hover:text-blue-800 font-bold gap-x-6 sm:mt-1">

     

      </ul>
           
         
    </div>

  </div>
    


    </div>
  );
}

export default NavBar;