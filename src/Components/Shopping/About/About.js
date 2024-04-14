import React from "react";
import '../main.css'
const About = () => {
    return (
        <div className="container-fluid">
            <div className="abt-link d-flex justify-content-center bg-light p-5">
                <div className="p-2">
                    <p className="fs-1 ">About Us</p>
                    <p className="fs-3"><a href="home">Home</a>/About</p>
                </div>
            </div>
            <h1 className="d-flex justify-content-center m-4 ">Furns is a global furniture destination for somethings.
                We sell cutting-edge furniture and offer a wide variety
                of fashion-related content.
            </h1>
            <div className="row mt-5 ">
                <div className="col-lg-6 str">
                    <img src="https://shorturl.at/wxAT8" />
                    <div className="m-5">
                        <h3>OUR STORES</h3>
                        <p className="ms-4">
                           <span className="ms-5">Lorem</span> ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 str">
                    <img src="https://img.freepik.com/free-photo/life-style_1122-1801.jpg?
                    t=st=1712661108~exp=1712664708~hmac=
                    ff6455d5ab71c5688189970b26e7c90f7623e61037c47beb7fbfaade6515163c&w=996"  />
                    <div className="m-5">
                        <h3>OUR MISSION</h3>
                        <p className="ms-4">
                           <span className="ms-5">Lorem</span> ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About