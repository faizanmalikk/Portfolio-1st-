import React from 'react'
import '../experienec/experience.css'
import {MdGppGood } from 'react-icons/md'
const Experience = () => {
  return (
    <section id='experience'>
      <div >
        <div className='experience-title text-center'>
        <h5 className='text-secondary'>What Skills I Have</h5>
        <h1>My Experience</h1> </div>
        <div className='experience-container'>
       <div className="row mt-5">
         <div className="col-md-6 col-sm-12">
           <div className='ex-frontend'>
             <h4 className=' pt-5 pb-4 fs-6 text-center' style={{color:'var(--color-primary)'}}>Frontend Development</h4>
                         <div className=''>
           <div className='ex-frontend2 '>
             <div className="row ">
                   <div className="col-md-7 col-sm-12   ex-html">

                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >HTML</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
               
                 </div>
               <div className="col-md-5 col-sm-12  ">
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}} />
                   <small className='px-2 fw-bolder' >CSS</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
               <div className="col-md-7 col-sm-12  ex-java ">
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder ' >JAVASCRIPT</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
               <div className="col-md-5 col-sm-12  ">
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='mx-2 fw-bolder' >BOOTSTRAP</small>
                   <p className='text-secondary mx-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
               <div className="col-md-7 col-sm-12  ex-tail">
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >TAILWIND</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
               <div className="col-md-5 col-sm-12 ">
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >REACT</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
            
                 </div>
                 </div>
             </div> </div></div>
         <div className="col-md-6 col-sm-12">
           <div className='ex-backend '>
           <h4 className=' pt-5 pb-4 fs-6 text-center' style={{color:'var(--color-primary)'}}>Backend Development</h4>
           <div className="px-4" style={{marginLeft:'0.8em'}}>
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >Node JS</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
           <div className="px-4" style={{marginLeft:'0.8em'}}>
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >ExpressJS</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
           <div className="px-4" style={{marginLeft:'0.8em'}}>
                   <MdGppGood className="experience-icon" style={{color : 'var(--color-primary)'}}/>
                   <small className='px-2 fw-bolder' >MongoDB</small>
                   <p className='text-secondary px-4' style={{fontSize: '18px'}}>Experienced</p>
                 </div>
                 <div style={{marginBottom:'10px'}}>

                 </div>
           </div>
           </div>
         </div>
        
        </div>
        </div>
      </section>
  )
}

export default Experience