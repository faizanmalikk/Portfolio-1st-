import React from 'react'
import token from '../../../src/assets/token'
const Btn = () => {
  return (
    <> <div className='header-btn '>
   <a href='#experience' ><button className='btn '>My Experience</button> </a> 
 <a href="#contact "><button className=' btn btn-primarye'>Lets Talk</button> </a>
 </div>
 <img src={token} alt="" />
  </>
  )
}

export default Btn