import React from 'react';
import "./aland.css"
import imgURL3 from  './components/bel_logo.jpeg'
import imgURL from './components/cbel.jpg'
const comdata = () => {
  
  
 return (
    <>
    <div className='container'>
     
    <div className="head">
    <span className='logo'><img src={imgURL3} /></span> 
    <div className='dib'><a href="/home" className='ad'>Home</a></div>
    
    <div className='dib'><a href="/comdata" className='ad'>Complaints
    </a></div>

    <div className='dib'><a href="#" className='ad'>Suppliers</a></div>
    <div className='dib'>Services
        <div className='dropdown'>
          <div className='content'>  
          
          <a id='con' href='#'>eProcurement-SRM</a><br></br>
          <a id='con' href='#'>GST Registration details</a><br></br>
          <a id='con' href='#'>eTender</a><br></br>
          <a id='con' href='#'>Vendor Directory</a><br></br>
          <a id='con' href='#'>Vendor Informations</a><br></br>
          <a id='con' href='#'>Work Contract</a><br></br>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='ll'>
    <span className='pic'><img src={imgURL} /></span> 
    
    </div>
  
  </>

  );
}
export default comdata;