import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    try {
      emailjs.init('TfWZZy8TBxbMngZTU')
      console.log('EmailJS initialized successfully')
    } catch (error) {
      console.error('EmailJS initialization error:', error)
    }
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Validate form before sending
    if (!form.current) {
      toast.error('Form error: Please refresh the page and try again', {
        position: 'bottom-center',
        autoClose: 4000,
        theme: 'dark',
      });
      return;
    }

    emailjs
      .sendForm('service_1x7wiqc', 'template_e2ecpa5', form.current, 'TfWZZy8TBxbMngZTU')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset form
        form.current.reset();
        // Display success message to the user
        toast.success('Message successfully sent!', {
          position: 'bottom-center',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error Details:', error);
        console.error('Error Status:', error.status);
        console.error('Error Text:', error.text);
        
        let errorMessage = 'Failed to send the message. ';
        
        // Provide specific error messages based on status code
        if (error.status === 412) {
          errorMessage += 'Please verify your EmailJS credentials (Service ID, Template ID, Public Key) are correct and your email service is properly connected in the EmailJS dashboard.';
        } else if (error.status === 400) {
          errorMessage += 'Invalid request. Please check that all form fields are filled correctly.';
        } else if (error.status === 401) {
          errorMessage += 'Authentication failed. Please verify your Public Key is correct.';
        } else if (error.text) {
          errorMessage += `Error: ${error.text}`;
        } else {
          errorMessage += 'Please try again or contact me directly via email.';
        }
        
        toast.error(errorMessage, {
          position: 'bottom-center',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };
  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am always interested in new opportunities—especially ambitious or large
            projects. If you have a question or request, feel free to reach out:
            <br />
            <a href="mailto:ethanjohnson2098@outlook.com" className="contact-page__link">ethanjohnson2098@outlook.com</a>
            <br />
            <a href="tel:+17737336728" className="contact-page__link">(773) 733-6728</a>
            <br />
            <a href="https://www.linkedin.com/in/ejohnson2098" target="_blank" rel="noreferrer" className="contact-page__link">LinkedIn</a>
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="info-map">
          Ethan Johnson
          <br />
          Chicago, IL
          <br />
          ethanjohnson2098@outlook.com
          <br />
          (773) 733-6728
          <br />
          <a href="https://www.linkedin.com/in/ejohnson2098" target="_blank" rel="noreferrer" className="contact-page__link">linkedin.com/in/ejohnson2098</a>
        </div>
        <div className="map-wrap">
          <MapContainer center={[41.8745, -87.6247]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.8745, -87.6247]}>
              <Popup>40 minute train ride from my location to downtown Chicago</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact