import React from "react";
import './main.css';
import Home from './Home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="header ">
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
                        <li><a href="Home">Home</a></li>
                        <li><a href="About">About</a></li>
                        <ul className="dropdown">
                            <a href="furnitures" className="fre">Furnitures</a>
                            <li className="li"><a href="Home funrnitures">Home furnitures</a></li>
                            <li className="li"><a href="office funrnitures">Office furnitures</a></li>
                            <li className="li"><a href="Home funrnitures">Hospital furnitures</a></li>
                        </ul>
                        <li><a href="Contact">Contact</a></li>

                    </ul>                
            </div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        {/* <Route path="/about me" element={<About />} /> */}
                        {/* <Route path="contact" element={<Contact />} /> */}
                        {/* <Route path='resume' element={<Resume />} /> */}
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar