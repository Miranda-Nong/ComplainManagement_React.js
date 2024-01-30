import React from 'react';
import "./landing.css" ;
import imgURL from './components/bel1.jpg'
import imgURL1 from './components/bel2.jpg'
import imgURL2 from './components/bel3.jpg'
import imgURL3 from  './components/bel_logo.jpeg'
const landing = () => {

  return (
   <>
   <div className='container'>
     
      <div className="head">
      <span className='logo'><img src={imgURL3} /></span> 
      <div className='dib'><a href="#" className='ad'>Home</a></div>
      
      <div className='dib'><a href="/login" className='ad'>Log In</a></div>

      <div className='dib'><a href="/admin" className='ad'>Admin</a></div>
      <div className='dib'>About Us
        <div className='dropdown'>
          <div className='content'>  
          
          <a id='con' href='#'>History</a><br></br>
          <a id='con' href='#'>Vision, Mission</a><br></br>
          <a id='con' href='#'>Leadership</a><br></br>
          <a id='con' href='#'>Quality</a><br></br>
          <a id='con' href='#'>Customers</a><br></br>
          <a id='con' href='#'>Manufacturing Units</a><br></br>
          <a id='con' href='#'>HR</a><br></br>
          <a id='con' href='#'>Subsidiary</a><br></br>
          <a id='con' href='#'>Joint Venture</a><br></br>
          <a id='con' href='#'>R&D</a><br></br>
          <a id='con' href='#'></a>
          </div>
        </div>
      </div>
      </div>
    
    </div>

    
    <div className='gallery'>
      
      <div className='slide'>
      <img src={imgURL} alt="person image"/>
      <img src={imgURL1} alt="person image"/>
      <img src={imgURL2} alt="person image"/>
    </div>
    </div>
    <div classsName='line'>
    <div className='para'>Bharat Electronics Limited (BEL) is a Navratna PSU under the Ministry of Defence,<br></br>
     Government of India. It manufactures state-of-the-art electronic products and systems for the Army, <br></br>
     Navy and the Air Force. BEL has also diversified into various areas like homeland security solutions,<br></br>
      smart cities, e-governance solutions, space electronics including satellite integration, energy storage <br></br>
      products including e-vehicle charging stations, solar, network & cyber security, railways & metro solutions, <br></br>
      airport solutions, Electronic Voting Machines, telecom products, passive night vision devices, medical electronics, <br></br>
      composites and software solutions. <br></br></div>
    </div>
    </>
    
    
    
  );
}

export default landing;
