import React ,{useState} from "react";
import "./App.css";
import imgURL3 from  './components/bel_logo.jpeg'
// import {NavLink} from 'react-router-dom';
 
const SignIn=()=> {
  const [user, setUser]=useState({
    name:"", email:"", password:""
  });

  let name,value;

  const handleInputs=(e)=>{
    console.log(e);
    name= e.target.name;
    value=e.target.value;

    setUser({user,[name]:value});
  }
    return (
        <>
        <div className='container'>
     
     <div className="head">
     <span className='logo'><img src={imgURL3} /></span> 
     <div className='dib'><a href="#" className='ad'>Home</a></div>
     
     <div className='dib'><a href="/login" className='ad'>User Login</a></div>

     <div className='dib'><a href="/admin" className='ad'>Admin</a></div>
     <div className='dib'><a href="#" className='ad'>Services</a>
     
     </div>
     </div>
   </div>
        <div className="whole">
            <p className="title">SIGN UP FORM</p>
            
 
            <form className="App">
             <div className="User">
                <span className="material-symbols-outlined" id="user">account_circle</span>
                <input type="text" placeholder="Username"  value={user.name} onChange={handleInputs} autoComplete="off" />
             </div>

             <div className="Email">
              <span className="material-symbols-outlined" id="mail">email</span>
              <input type="email"  placeholder="Email ID" value={user.email} onChange={handleInputs} autoComplete="off"/>
             </div>

             <div className="pw">  
               <span className="material-symbols-outlined" id="lock">lock</span>
               <input type="password"  placeholder="Password"  value={user.password} onChange={handleInputs} autoComplete="off"/>
             </div>
             <button className="btn">SUBMIT</button>
              <span id="sp">Already have an account? &nbsp; <a href="/login" id="at">Log in</a></span>
             
            </form>
            </div>
        </>
        
    );
}
 
export default SignIn;
