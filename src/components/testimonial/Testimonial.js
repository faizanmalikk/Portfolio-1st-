import React from 'react'
import '../testimonial/testimonial.css'
import img1 from '../../assets/testimonial/testimonial1.jpeg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Testimonial = () => {
    const data =[
        {
            name : "Chris Jorden",
            img : img1,
            review : " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dicta accusamus laboriosam cupiditate sapiente quaerat dolore nulla veritatis est doloremque neque fuga, minima reprehenderit! Sit numquam non similique blanditi "
         
        },
        {
            name : "Chris Jorden",
            img : img1,
            review : "is xjk,nsectetur adipisicing elit. Veniam dicta accusamus laboriosam cupiditate sapiente quaerat dolore nulla veritatis est doloremque neque fuga, minima reprehenderit! Sit numquam non similique blanditiis xj"
        },
        {
            name : "Chris Jorden",
            img : img1,
            review : "yeshis xjk,nsectetur adipisicing elit. Veniam dicta accusamus laboriosam cupiditate sapiente quaerat dolore nulla veritatis est doloremque neque fuga, minima reprehenderit! Sit numquam non similique blanditiis xj"
        },
        {
            name : "Chris Jorden",
            img : img1,
            review : "yesh this guy is reis xjk,nsectetur adipisicing elit. Veniam dicta accusamus laboriosam cupiditate sapiente quaerat dolore nulla veritatis est doloremque neque fuga, minima reprehenderit! Sit numquam non similique blanditiis xjalyy nice hell boy yeah ok hai"
        }
    ]
  return (
    <section className='text-center testimonial'id='testimonial' >
 
    <div className='testimonial-title '>
       <h5 className='text-secondary'>Review from clients</h5>
       <h2>Testimonials</h2>
    </div>
    <div className=' pt-4 '>
    <Swiper 

 slidesPerView={1}
  modules={[Pagination]}
  pagination={{ clickable: true }}
  spaceBetween={30}

     className='testimonial-container '>
       
  {data.map((v,i)=>{
      return (
        <SwiperSlide 
        className='  testimonial-area' key={i}> 
        <div className='testimonial-img d-flex justify-content-center '>
             <img src={v.img} alt="testimonial-img " />
       </div>
       <div className='testimonial-name mt-3'>
         <h2>{v.name}</h2>
       </div>
       <div className='testimonial-review '>
           <p>{v.review}</p>
       </div>
  
   
       </SwiperSlide> 
      )
  })} 

    </Swiper> </div>
   
    </section>
  )
}

export default Testimonial