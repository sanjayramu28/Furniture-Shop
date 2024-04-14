import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const notify = () => {
        toast("Email Sent Successful!")
    };
    
    const form = useRef();
    const Email = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_orwprxf', 'template_mlh2o1m', form.current, {
                publicKey: 'ugL8RNcg6iHrDJ_Bm',
            })
            .then(
                () => {
                    notify();
                    // form.resetFields();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (

        <>
            <div className="abt-link d-flex justify-content-center bg-light p-5">
                <div className="p-2">
                    <p className="fs-1 ">Contact Us</p>
                    <p className="fs-3"><a href="home" className="text-decoration-none text-dark">Home</a>/Contact</p>
                </div>
            </div>
            <div className="info mt-5 ">
                <div className="row" style={{ gap: '20px' }}>
                    <div className="col-lg-4 bg-light  ms-5">
                        <div className="d-flex justify-content-center mt-3 "  >
                            <div>
                                <h2>Contact Info</h2>
                                <label>Phone No:</label>
                                <span>
                                    9087661022
                                </span>
                                <br />
                                <label>Email:</label>
                                <span>abc@gmail.com</span>
                                <br />
                                <label>Address:</label>
                                <span>Some Random Streets</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 bg-light ms-5">
                        <div className="d-flex justify-content-center mt-3 ">
                            <div>
                                <h2>Get In Touch</h2>


                                <form ref={form} onSubmit={Email}>
                                    <div className="row d-flex">
                                        <div className="col-lg-6">
                                            <label >First Name</label>
                                            <input type="text" className="w-100 p-1" name="Fname" required />
                                        </div>
                                        <div className="col-lg-6 ">
                                            <label>Your Email</label>
                                            <input type="email" className="w-100 p-1" name="User_mail" required />
                                        </div>
                                    </div>
                                    <label>Subject</label>
                                    <br />
                                    <input type="text" className="w-100 p-3" name="Subject" required />
                                    <br />
                                    <label>Message</label>
                                    <br />
                                    <textarea rows={5} className="w-100" name="Message" required />
                                    <input type="submit" value="Send Message" className="w-100 mb-5 p-2 mt-3 button bg-warning text-white fs-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Contact