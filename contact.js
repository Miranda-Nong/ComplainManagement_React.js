import React from 'react';
import './landing.css'
import imgURL3 from  './components/bel_logo.jpeg'

const contact = () => {
    return (   <>
   <div className='container'>
     
      <div className="head">
      <span className='logo'><img src={imgURL3} /></span> 
      <div className='dib'><a href="/home" className='ad'>Home</a></div>
      
      <div className='dib'><a href="/login" className='ad'>User Login</a></div>

      <div className='dib'><a href="/admin" className='ad'>Admin</a></div>
      <div className='dib'><a href="#" className='ad'>Services</a>
      
      </div>
      </div>
    
    </div>

    
    <div className='c1'>
      <div className='c2'><h2>Contact Us</h2></div>
      <div className='a1'><h3>Registered Office</h3></div>
      <div className='a1'> Bharat Electronics Limited<br></br>

Corporate Office<br></br>

Outer Ring Road, Nagavara<br></br>

Bangalore - 560045<br></br></div>
    

    <div className='a2'><h3>Contact Us</h3></div>
    <div className='a2'> +91- 80-25039300 <br></br>

18004250433 (Toll Free) - BEL Customer complaints registration only<br></br></div>
</div>
    </>
  );
}

export default contact;
