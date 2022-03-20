import React from 'react'
import '../portfolio/portfolio.css'
import img1 from '../../assets/portfolio/img1.jpeg'
import img2 from '../../assets/portfolio/img2.jpg'
const Portfolio = () => {
    const data = [
        {
            title : "Easiest to utilize your text",
            img : img1,
            github : "https://github.com/faizanmalikk/TextUtils",
            Demo : "https://github.com/faizanmalikk/TextUtils"
        },
        {
            title : "Easiest to utilize your text",
            img : img2,
            github : "https://github.com/faizanmalikk/TextUtils",
            Demo : "https://github.com/faizanmalikk/TextUtils"
        },
        {
            title : "Easiest to utilize your text",
            img : img1,
            github : "https://github.com/faizanmalikk/TextUtils",
            Demo : "https://github.com/faizanmalikk/TextUtils"
        },
        {
            title : "Easiest to utilize your text",
            img : img1,
            github : "https://github.com/faizanmalikk/TextUtils",
            Demo : "https://github.com/faizanmalikk/TextUtils"
        }
    ]
    
  return (
    <section id='portfolio'>
   <div className="portfolio-header text-center">
       <h5 className='text-secondary'>My Recent Work</h5>
       <h2>Portfolio</h2>   </div>
       <div className='row py-4'>
  
                 {data.map((v,i)=>{

                   return  <div key={i} className='col-md-4 col-sm-6 col-12 my-sm-1 py-1'>
                   <div className='portfolio-area'>
                   <div className='portfolio-img'>
                     <img  src={v.img} alt="" className='img-fluid' />
                   </div>
                   <div className='portfolio-title' >
            <h4>{v.title}</h4>
        </div>
        <div className='portfolio-btn py-3 text-sm-center'>
            <a href={v.github} target={'_blank'} className=' btn mx-sm-3 portfolio-gitbtn'>Github</a> 
            <a href={v.Demo} target={'_blank'} className='btn mx-3 portfolio-gitbtn btn-primarye '>Live Demo</a> 
        </div>
        <div className='my-2'>

        </div>

               </div> </div>   })}

       </div>
 
    
    </section>
  )
}

export default Portfolio