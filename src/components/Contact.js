import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});


function Contact() {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ setSubmitting, resetForm }) => {
      emailjs
        .sendForm('service_ddc6gg8', 'template_7x3q6qy', form.current, 'Vcqt9muB5wjibvT34')
        .then((response) => {
          toast.success('Message sent successfully', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log('Message sent successfully:', response);
          resetForm(); // Reset form fields after submission
        })
        .catch((error) => {
          console.log('Failed to send message:', error);
          toast.error('Failed to send message');
        })
        .finally(() => setSubmitting(false));
    },
  });


  return (
    <div className="sm:mt-8 lg:mt-16 ">
      <div className="sm:mt-8 lg:mt-16 ">
        <ToastContainer position="top-right" />
      </div>
      <h1
        className=" mt-1 text-xl lg:text-2xl font-bold  text-yellow-900  "
        id="contact"
      >
        GET IN TOUCH
      </h1>

      <div>
        <form
          onSubmit={formik.handleSubmit}
          ref={form}
          className="  justify-center  sm:mt-8 lg:mt-16 "
        >
          <h1 className=" mt-1 text-xl lg:text-2xl ">
            If you’d like to chat about a project or just have question, please
            fill in the form below. I aim to get back within 24hrs.
          </h1>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p
                style={{ color: '#FF0000', fontSize: '14px', marginTop: '2px' }}
              >
                {formik.errors.name}
              </p>
            )}
          </div>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p
                style={{ color: '#FF0000', fontSize: '14px', marginTop: '2px' }}
              >
                {formik.errors.email}
              </p>
            )}
          </div>

          <div
            style={{
              marginTop: '20px',
            }}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p
                style={{ color: '#FF0000', fontSize: '14px', marginTop: '2px' }}
              >
                {formik.errors.subject}
              </p>
            )}
          </div>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <textarea
              type="text"
              rows="5"
              id="message"
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message && (
              <p
                style={{ color: '#FF0000', fontSize: '14px', marginTop: '2px' }}
              >
                {formik.errors.message}
              </p>
            )}
          </div>

          <div
            style={{
              marginTop: '20px',
            }}
          >
            <input
              type="submit"
              value="Send Message"
              disabled={!formik.isValid}
              style={{
                backgroundColor: !formik.isValid ? '#a3d1ff' : '#007bff',
                color: '#fff',
                fontSize: '16px',
                borderRadius: '15px',
                padding: '10px 24px',
                height: '60px',
                marginTop: '20px',
                width: '100%',
              }}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
