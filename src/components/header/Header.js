import React from 'react'
import Btn from './Btn'
import me from '../../assets/me.png'
import './header.css'
import HeaderSocial from './HeaderSocial';
function Header(props) {
const {setnavActive} = props
  return (
   <header>
     <div className="header-container container text-center ">
  <div className='row'> <div className='col-md-12 col-sm-12'> <h5 className='header-title'>Hello i'm</h5>
    <h1>Faizan Jamil</h1>
    <h5 className='text-secondary'>Full Stack Developer</h5>
    <Btn/></div> </div>

    <HeaderSocial/>
  <div className="me "> <img src={me} className="" alt="me" /> </div>
   <a href="#contact" onClick={()=> setnavActive('#contact')}> <h5 className="header-scroll">Scroll Down</h5> </a>
</div>
   </header>
  )
}

export default Header