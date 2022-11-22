import React from 'react'



function Contact () {

  return (
    <div className="sm:mt-8 lg:mt-16 " >

    <h1 className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  " id="contact">GET IN TOUCH</h1>
      
        <form className="sm:mt-8 lg:mt-16 ">
       
        <input type="text" id="fname" name="fname" placeholder="Name"/><br />
        <label for="lname"></label><br/>
        <input type="text" id="lname" name="lname" placeholder="Email"/><br/>
        <label for="lname"></label><br/>
        <input type="text" id="lname" name="lname" placeholder="Subject"/><br/>
        <label for="lname"></label><br/>
        <input type="message" rows="5" id="lname" name="lname" placeholder="Message"/><br/>
        </form>
        
 

    </div>
  )
}

export default Contact;