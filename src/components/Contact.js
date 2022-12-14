import React from 'react';






function Contact () {

  return (
    <div className="sm:mt-8 lg:mt-16 ">
      <h1
        className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  "
        id="contact"
      >
        GET IN TOUCH
      </h1>
      <div>
        <form action="https://getform.io/f/288c4385-36c0-495a-b55e-928f92f6133d" method="post" className="  justify-center  sm:mt-8 lg:mt-16 " >
       
          <h1 className=" mt-1 text-xl lg:text-2xl ">
            If you’d like to chat about a project or just have question, please
            fill in the form below. I aim to get back within 24hrs.
          </h1>
          <label for="name"></label>
          <br />
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <label for="email"></label>
          <br />
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <label for="Subject"></label>
          <br />
          <input
            required
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <br />
          <label for="message"></label>
          <br />
          <textarea
            type="text"
            rows="5"
            id="message"
            name="message"
            placeholder="Message"
          />
          <br />
          <input type="submit" value="Send Message" ></input>
        </form>
        </div>

     
    </div>
  );
}

export default Contact;
