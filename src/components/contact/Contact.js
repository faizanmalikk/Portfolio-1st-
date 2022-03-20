import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../contact/contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0i7c2kd', 'template_r6icyat', form.current, 'v2p3v6oEibBzL1rIY') 
    e.target.reset();
};
  return (
    <section id='contact'>
   
   <div className="contact-title text-center">
     <h5 className='text-secondary'>Get in touch</h5>
     <h2>Contact Me</h2>
   </div>
  <div className="row mt-5 ">
    <div className='col-lg-5 col-md-5 col-sm-12'>
           <div className='row'>
             <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='contact-apps text-center'>
            <FiMail className='fs-5'/>
            <h3>Email</h3>
            <h5>faizanjamil656@gmail.com</h5>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=faizanjamil656@gmail.com' target={'_blank'}>Send a message</a>
              </div>
             </div>
             <div className='col-lg-12 col-md-12 col-sm-12 my-4'>
              <div className='contact-apps text-center'>
            <RiMessengerLine className='fs-4'/>
            <h3>Messanger</h3>
            <h5>Faizan MaLik</h5>
            <a href='https://m.me/faizan.malyk66' target={'_blank'}>Send a message</a>
              </div>
             </div>
             <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='contact-apps text-center'>
            <BsWhatsapp className='fs-5'/>
            <h3>Whats-App</h3>
            <h5>+92-321-3193023</h5>
            <a href='https://api.whatsapp.com/send?phone=+923213193023' target={'_blank'}>Send a message</a>
              </div>
             </div>

           </div>
    </div>
    <div className='col-lg-7 col-md-7 col-sm-12 mt-sm-4 '>
<form ref={form} onSubmit={sendEmail} className='contact-textarea'>
  <input type="text" name='name' required placeholder='Your Full Name'/>
  <input type="email" name="email" required  placeholder='Your Email '/>
  <textarea name="message"   rows="7" placeholder='Your Message' ></textarea>
    <button className='btn btn-primarye  '>Send Message</button>
</form>
    </div>
  </div>


    </section>
  )
}

export default Contact