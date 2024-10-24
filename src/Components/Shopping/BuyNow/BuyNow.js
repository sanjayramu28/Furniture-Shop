import React from "react"
import { useLocation, useParams } from "react-router-dom"
import '../BuyNow/BuyNow.css'

// export const values=(title)=>{
//     console.log("Vh")
//     const NName=title;
// }

const BuyNow = () => {
    const location = useLocation()
    // const { item,qty}= location.state||{}
    const { item, qty, TotalPrice } = location.state || {};
    console.log(item)
    console.log(TotalPrice)
    return (
        <div className="container">
            <h3>CheckOut</h3>
            <div className="mt-5 container-fluid d-flex">
                <div className="w-50">
                        <h2>Customer Information:</h2>
                    <form className="m-3 Forms">
                        <input className="w-100" type="text" name="Username" placeholder="Enter UserName or Email Address" />
                        <h4 className="mt-5">Billing Details</h4>
                        <div className="d-flex gap-4 m-3 ">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input className=" m-3" type="text" placeholder="Company Name" />
                        <select title="Country" className="w-100 p-1 m-3">
                            <option value="Hi">
                                Namakkal
                            </option>
                            <option>
                                Tiruchengode
                            </option>
                            <option>
                                Erode
                            </option>
                            <option>
                                Coimbatore
                            </option>
                            <option>
                                Salem
                            </option>
                        </select>
                        <div className="d-flex m-3 gap-3">
                            <input type="text" name="House_No" placeholder="House No" />
                            <input type="text" name="Apartment" placeholder="Apartment,suite,Unit(optional)" />
                        </div>
                        <div className="d-flex m-3 gap-3">
                            <input type="text" name="Town" placeholder="Town" />
                            <input type="text" name="Zip code(Pin Code)" placeholder="Zip Code" />
                        </div>
                        <input className="m-3" type="tel" name="Phone_No" placeholder="Phone Number" />
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
                                {/* <div className="d-flex justify-content-between"> */}
                                <p>{item.title}x{qty}</p>
                                <p>Rs: {TotalPrice}</p>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="d-flex">
                        <label className="text-center col-6"> Total:</label>
                        <label className="text-center col-6"><span className="me-3">Rs:</span>{TotalPrice}</label>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn w-100 btn-primary m-3">Place Order</button>
            {/* <p>{qty}</p> */}
        </div>
    )
}

export default BuyNow