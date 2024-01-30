import React from "react";
import imgURL3 from  './components/bel_logo.jpeg'
import "./landing.css" ;
const User = () => {
    
    return (
        <>
         <div className='container'>
     
     <div className="head">
     <span className='logo'><img src={imgURL3} /></span> 
     <div className='dib'><a href="/home" className='ad'>Home</a></div>
     
     <div className='dib'><a href="/login" className='ad'>User Login</a></div>

     <div className='dib'><a href="/complaint" className='ad'>File Complaint</a>
    
     </div>
     <div className='dib'><a href="/contact" className='ad'>Contact Us</a></div>
     
     </div>
     </div>
   
          
        </>
    );
}

export default User;
