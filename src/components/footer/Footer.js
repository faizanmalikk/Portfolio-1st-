import React from 'react'
import '../footer/footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <div className='footer text-dark  mt-4 container-fluid'>
        <div className='row'>

       
        <div className='col-md-12 col-sm-12'>
        <h2 className='pt-4 text-center '>Faizan Malik</h2>
        </div>
        <div className='col-md-12 col-sm-12'>
        <div className='footer-links text-center pt-3 '>
             <a href="#">Home</a>
             <a href="#about">About</a>
             <a href="#experience">experience</a>
             <a href="#services">Services</a> 
            <a href="#portfolio">Portfolio</a> 
             <a href="#testimonial">Testimonials</a> 
             <a href="#contact">Contact</a> 

        </div>  </div>
        <div className='col-md-12 col-sm-12 footer-icons'>
        <div className='footer-icons  mt-4'>
           <a href="https://www.facebook.com/faizan.malyk66/" target={'_blank'}> <FaFacebookF/></a>
           <a href="https://www.instagram.com/faizanmalyk01/?hl=en" target={'_blank'} > <BsInstagram/></a>
           <a href="https://github.com/faizanmalikk" target={'_blank'}> <AiOutlineGithub/></a>
        </div>  </div>
        <div className=' footer-copyright col-md-12 col-sm-12 text-center'>
           <h5 className='mt-3'>Copyright © 2022 faizanjamil656@gmail.com</h5>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer