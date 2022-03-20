import './Nav.css'
import React,{useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
function Nav(props) {
const {setnavActive , navActive} = props
  return (
    <nav>
      <a href="#" onClick={()=> setnavActive('#')} className={navActive==='#'?'nav-active':''}> <AiOutlineHome/>  </a>
      <a href="#about" onClick={()=> setnavActive('#about')} className={navActive==='#about'?'nav-active':''}> <AiOutlineUserAdd/>  </a>
      <a href="#experience"onClick={()=> setnavActive('#experience')} className={navActive==='#experience'?'nav-active':''}> <BiBookAlt/>  </a>
      <a href="#services"onClick={()=> setnavActive('#services')} className={navActive==='#services'?'nav-active':''}> <RiServiceFill/>  </a>
      <a href="#contact" onClick={()=> setnavActive('#contact')} className={navActive==='#contact'?'nav-active':''}><IoMdContact/>  </a>
    </nav>
  )
}

export default Nav