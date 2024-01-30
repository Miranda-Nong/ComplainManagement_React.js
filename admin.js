import imgURL3 from  './components/bel_logo.jpeg'
const admin = () => {
    // const func = () => {
    //     return  redirect('/');
    // }
    return (
        <>
         <div className='container'>
     
     <div className="head">
     <span className='logo'><img src={imgURL3} /></span> 
     <div className='dib'><a href="/home" className='ad'>Home</a></div>
     
     <div className='dib'><a href="/login" className='ad'>User Login</a></div>

     <div className='dib'><a href="/admin" className='ad'>Admin</a></div>
     <div className='dib'><a href="/contact" className='ad'>Contact Us</a>
     
     </div>
     </div>
   </div>
           <div className="whole">
            <p className="title">ADMIN LOG IN</p>


            <form className="App" >
                <div className="User">
                    <span class="material-symbols-outlined" id="user">account_circle</span>
                    <input type="text" placeholder="Username" /></div>


                <div className="pw">
                    <span class="material-symbols-outlined" id="lock">lock</span>
                    <input type="password" placeholder="Password" /></div>
                <a className="btn" href="/aland" >SUBMIT</a>
            </form>
            </div>
        </>
    );
}

export default admin;
