import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
const HeaderSocial = () => {
  return (
    <div className='header-socials'>
   
   <a href="https://www.facebook.com/faizan.malyk66/" target={'_blank'}> <FaFacebookF/></a>
   <a href="https://github.com" target='_blank'> <ImGithub/></a>
   <a href="https://www.instagram.com/faizanmalyk01/?hl=en" target={'_blank'} > <BsInstagram/></a>

  
    </div>
  )
}

export default HeaderSocial