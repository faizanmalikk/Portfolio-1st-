import React from 'react'
import '../about/about.css'
import me from '../../assets/about-img.jpg'
import {RiUserFollowLine} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <div className='container-fluid'>
      <div className='about-title text-center '>
        <h5 className='text-secondary'>Get to know</h5>
        <h1 >About me</h1>
      </div>
        <div className='about-container row mt-5'>
          <div className='col-md-4 col-sm-12'>
          <div className=' about-img '>
            <div className='about-me-img'>
              
           <img src={me} alt="About img" />
            </div>
          </div> </div>
          <div className='col-md-8 col-sm-12 px-md-5 px-lg-g px-xl-5 about-info' >
           <div className='about-cards row'>
             <div className='col-lg-4 col-md-4 text-sm-center col-sm-6 '> 
           <article className='text-center about-card'>
            <RiUserFollowLine className='about-icons '/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 ab-2'> 
            <article className='about-card text-center'>
            <FaUserFriends className='about-icons '/>
            <h5>Clients</h5>
            <small>40+ Worldide</small>
            </article>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 ab-3'> 
            <article className='about-card text-center'>
            <VscFolderLibrary className='about-icons'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
            </article> 
            </div></div> <div className='about-content text-xs-center'>
     <p className='text-secondary mt-4 mb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit, reiciendis dolore eius fugit voluptatem molestias distinctio fuga vitae, dicta ullam aperiam a nam architecto beatae numquam voluptatum perferendis accusamus nulla tempore!</p>
        <a href="#contact" className='btn btn-primarye '>Lets Talk</a>
          </div></div>

        </div>

      </div>
      
      </section>
  )
}

export default About