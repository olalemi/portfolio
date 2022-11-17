import React from 'react'
import Button from '@mui/material/Button';
import tipcalc from '../images/tipcalc.jpg'

const Section = (props) => {
  return (
<div>

<h1 className=" mt-1 text-xl lg:text-2xl font-bold "> PROJECTS</h1> 

<div className=" mt-4 flex flex-wrap gap-x-4 text-sm text-blue-800">

<img  className=" w-96 rounded-md" src={tipcalc} alt="myphotoo" />


   <div className=" sm:mt-4 ">
   <h3 >Project 1</h3>

          <ul className=" mt-4  flex-wrap gap-8 text-sm text-blue-800">
            <li>PROJECTS</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>

          <Button className=" mt-4 rounded-md" variant="outlined">View Details</Button>
    </div>



</div>


    </div>
  )
}

export default Section;