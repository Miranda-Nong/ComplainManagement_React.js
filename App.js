import React from "react";
// import "./App.css";
// import "./landing.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Admin from "./admin";
import Complaint from "./complaint";
import Aland from "./Aland";
import Comdata from "./comdata";
import Home from "./Home";
import Contact from "./contact"
import User from "./userpage";


function App() {
    return (
        <>
        <BrowserRouter>
        <Link to='/'> </Link> 
            <Link to="/signup"> </Link> 
            <Link to="/login"> </Link> 
            <Link to="/admin"> </Link> 
            <Link to="/complaint"> </Link> 
            <Link to="/aland"> </Link> 
            <Link to="/comdata"> </Link> 
            <Link to="/Home"> </Link> 
            <Link to="/Contact"> </Link> 
            <Link to="/userpage"> </Link>
           
                <Routes>
            <Route
                        exact
                        path="/"
                        element={<Home/>}
                        />
                      <Route
                            exact
                            path="/signup"
                            element={<SignIn />}
                        />
    
                      <Route
                            exact
                            path="/login"
                            element={<LogIn/>}
                        />
                         <Route
                            exact
                            path="/aland"
                            element={<Aland/>}
                        />
                    
                <Route path="login" element={<LogIn />} />
                <Route
                            exact
                            path="/admin"
                            element={<Admin/>}
                        />
                 <Route
                            exact
                            path="/complaint"
                            element={<Complaint/>}
                        />
                    <Route
                            exact
                            path="/comdata"
                            element={<Comdata/>}
                        />
                        <Route
                            exact
                            path="/Home"
                            element={<Home/>}
                        />
                    <Route
                            exact
                            path="/Contact"
                            element={<Contact/>}
                        />
                        <Route
                            exact
                            path="/userpage"
                            element={<User/>}
                        />
                         
                      
                </Routes>
               
            </BrowserRouter> 

        </>
    );
}

export default App;
