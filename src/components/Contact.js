import React from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

}



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
        <form name ="contact1" method="POST" data-netlify="true" onSubmit="submit "className="  justify-center  sm:mt-8 lg:mt-16 ">
        <input type="hidden" name="form-name" value="contact" />
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
          <label for="Email"></label>
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
          <label for="Message"></label>
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

         <div>

                    <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="subject" 
              value="Sales inquiry from mysitename.netlify.app" />
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
         </div>


     
    </div>
  );
}

export default Contact;
