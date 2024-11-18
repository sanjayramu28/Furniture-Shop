import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useLocation, useParams } from "react-router-dom"
import '../BuyNow/BuyNow.css'
import axios from "axios";

// export const values=(title)=>{
//     console.log("Vh")
//     const NName=title;
// }


const mongonotify = () => toast("Error Connecting!");

const BuyNow = () => {
    const location = useLocation()
    const { item, qty, TotalPrice } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        houseNo: '',
        apartment: '',
        town: '',
        zipCode: '',
        phoneNo: '',
        productName:item.title,
        Qty:qty,
        TotalPrice:TotalPrice
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/submit', formData);
            if (response.status == 201) {
                // setMessage('Order Placed Successfully');
                window.alert("Order Placed Successfully")
            }
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error submitting form');
            mongonotify();
        }
    };
    // console.log(item)
    // console.log(TotalPrice)
    return (
        <div className="container">
            <h3>CheckOut</h3>
            <ToastContainer />

            <div className="mt-5 container-fluid d-flex">
                <div className="w-50">
                    <h2>Customer Information:</h2>
                    <form onSubmit={handleSubmit} className="Forms">
                        {/* <input type="text" name="username" placeholder="Username" className="m-2" onChange={handleChange} required /> */}
                        <input type="text" name="firstName" placeholder="First Name" className="m-2 p-2 " onChange={handleChange}
                        />
                        <input type="text" name="lastName" placeholder="Last Name" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="companyName" placeholder="Company Name" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="country" placeholder="Country" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="houseNo" placeholder="House No" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="apartment" placeholder="Apartment (optional)" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="town" placeholder="Town" className="m-2 p-2 " onChange={handleChange} />
                        <input type="text" name="zipCode" placeholder="Zip Code" className="m-2 p-2 " onChange={handleChange} />
                        <input type="tel" name="phoneNo" placeholder="Phone Number" className="m-2 p-2 " onChange={handleChange} />
                        {/* <button type="submit">Submit</button> */}
                        {/* {message && <p>{message}</p>} */}
                        <button className="btn w-100 btn-primary m-3">Place Order</button>
                    </form>
                </div>
                <div className="m-3 w-50">
                    <h2>Your Order</h2>
                    <div className="card" >
                        <h2 className="p-3" >Product</h2>
                        <div className="d-flex gap-4">
                            <div className="d-flex">
                                <img src={item.img} className="buy-img" />
                            </div>
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <p>{item.title} &nbsp;x&nbsp; {qty}</p>
                                <p>Rs: &nbsp;{TotalPrice}</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <label className="text-center col-6"> Total:</label>
                            <label className="text-center col-6"><span className="me-3">Rs:&nbsp;</span>{TotalPrice}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNow