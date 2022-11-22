import * as React from 'react';
import { Document, Page } from 'react-pdf';
import Resume from '../Resume.pdf';
import photo from '../photo.JPG'
// import {Toolbar, Typography} from '@mui/material';
import {Link} from 'react-scroll';




 function NavBar() {
  return (
    <div className=" flex flex-col  md:flex-row gap-x-8">
      

            
          <img  className=" sm:w-28 md:w-40 shrink-0 sm:rounded-full " src={photo} alt="myphoto" />
            
            
          
    <div className="flex flex-col sm:gap-y-6 md:gap-y-12 sm:mt-4">

              <div >
                  <h1 className="text-2xl text-yellow-900 font-bold ">NURUDEEN OLALEMI</h1>
              </div>

          <div >

          

            <ul className="flex flex-row flex-wrap hover: font-bold cursor-pointer gap-x-6  lg:text-2xl">
            <li className="hover:text-yellow-900"><Link to='project' spy={true} smooth={true}  offset={700} duration={500}>PROJECT</Link></li>
            <li className="hover:text-yellow-900"><a href={Resume} without rel="noopener noreferrer" target="_blank">RESUME</a></li>
            <li className="hover:text-yellow-900"><Link to='contact' spy={true} smooth={true}  offset={70} duration={500}>CONTACT</Link></li>
            

        

            </ul>

            

                                
                              
          
              
          </div>

    </div>
    


  </div>
  );
}

export default NavBar;