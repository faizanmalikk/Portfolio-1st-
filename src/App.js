import React,{useState} from 'react'
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experienec/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';

function App() {
  const [navActive, setnavActive] = useState("#")
  return (
<>
<div className='container'>
<Header setnavActive={setnavActive } />
<Nav setnavActive={setnavActive} navActive={navActive}/>
<About/>
<Experience/>
<Services/>
<Portfolio/>
<Testimonial/>
<Contact/>
</div>
<Footer/>
</>
  );
}

export default App;
