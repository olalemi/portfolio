import React from 'react'



function Contact () {

  return (
    <div className="sm:mt-8 lg:mt-16 " >

    <h1 className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  " id="contact">GET IN TOUCH</h1>
      <div>

       <form className="  justify-center  sm:mt-8 lg:mt-16 ">

      <h1 className=" mt-1 text-xl lg:text-2xl ">If you’d like to chat about a project or just have question, please fill in the form below. I aim to get back within 2 days.</h1>
      <label for="lname"></label><br/>
      <input required  type="text" id="fname" name="fname" placeholder="Name"/><br />
      <label for="lname"></label><br/>
      <input required  type="email"  id="lname" name="lname" placeholder="Email" /><br/>
      <label for="lname"></label><br/>
      <input required type="text" id="lname" name="lname" placeholder="Subject"/><br/>
      <label for="lname"></label><br/>
      <textarea type="textarea" rows="5" id="lname" name="lname" placeholder="Message"/><br/>
      <input type="submit" value="Send Message"></input>

      </form>

        
      </div>
        
        
 

    </div>
  )
}

export default Contact;