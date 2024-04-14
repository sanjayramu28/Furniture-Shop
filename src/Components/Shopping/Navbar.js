import React, { useState } from "react";
import './main.css';
import Home from './Home.js'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About/About.js";
import Contact from "./Contact/Contact.js";
import HomeFurnitures from "./HomeFurns/HomeFurnitures.js";
const Navbar = () => {

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/14030/14030577.png" className="nav-img" />
                    </div>
                    <div className="col-md-8 links">
                        <ul>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/128/6671/6671414.png"></img>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/128/1090/1090740.png"></img>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="navbar-link">
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <ul className="dropdown">
                        <Link to="furnitures" className="fre" >
                            Furnitures
                        </Link>
                        <div className="li">
                            <li><Link to="Home funrnitures">Home furnitures</Link></li>
                            <li><Link to="office funrnitures">Office furnitures</Link></li>
                            <li><Link to="Home funrnitures">Hospital furnitures</Link></li>
                        </div>
                    </ul>
                    <li><Link to="Contact">Contact</Link></li>
                </ul>
            </div>
            {/* <BrowserRouter> */}
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path='Home funrnitures' element={<HomeFurnitures />} />
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}
export default Navbar