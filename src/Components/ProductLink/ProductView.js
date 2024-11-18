import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { Hospital_Furns, data, office_Furns } from '../Shopping/db';
import { changeimg, decrement, increment } from '../Shopping/Functions';
import './Productview.css'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const localcart = () => {
    const data = localStorage.getItem("CARTS");
    if (data === "undefined") {
        return [];
    } else {
        return JSON.parse(data);
    }
};

const notify = (msg) => toast(msg);


const ProductView = () => {
    const [qty, setqty] = useState([1]);
    const Check=(product)=>{
        const checked=cart.some(pro=>pro.id==product.id);
        if(!checked){
        addc(product);
        let msg="Item Added Successfully"
        notify(msg);
        }
        else{
            let msg="Item already Added"
            notify(msg);
        }
    }
    const [cart, setcart] = useState(localcart());
    
    useEffect(() => {
        window.localStorage.setItem("CARTS", JSON.stringify(cart));
        window.localStorage.setItem("Qty", JSON.stringify(qty));
    }, [cart, qty]);
    
    const addc=(product)=>{
        setcart([...cart, product]);
        console.log(product)        
    }

    const { productId } = useParams();

    const {id}=useParams();

    console.log(id)

    let product;
    if (productId && Hospital_Furns.find(item => item.title === productId)&&Hospital_Furns.find(item=>item.id==id)) {
        product = Hospital_Furns.find(item => item.title === productId)&&Hospital_Furns.find(item=>item.id==id);
    } else if (productId && office_Furns.find(item => item.title === productId)&&office_Furns.find(item => item.id == id)) {
        product = office_Furns.find(item => item.title === productId)&&office_Furns.find(item => item.id == id);
    } else if (productId && data.find(item => item.title === productId)&&data.find(item=>item.id==id)) {
        product = data.find(item => item.title === productId)&&data.find(item=>item.id==id);
    }

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <span className='fs-2 ms-5'>
                <NavLink to="/" className=" text-decoration-none">Home</NavLink>/<label>{product.title}</label>
            </span>
            <br />
            <ToastContainer />
            <div className="mt-5 row">
                <div className="col d-flex justify-content-center ms-5">
                    <div className="d-flex flex-column side-img">
                        <img src={product.img1} onMouseEnter={() => changeimg(product.img1)} />
                        <img src={product.img2} onMouseEnter={() => changeimg(product.img2)} />
                        <img src={product.img3} onMouseEnter={() => changeimg(product.img3)} />
                    </div>
                    <img src={product.img} alt={product.title} className='border border-2 main-img' style={{ width: "600px", height: "500px" }} />
                </div>
                <div className="col d-flex align-items-center ms-5">
                    <div>
                        <h3 style={{ fontFamily: "Jaini Purva", fontSize: "60px" }}>{product.title}</h3>
                        <p style={{ fontFamily: "Roboto Mono" }}>Price: {product.price}</p>
                        {product.reducedprice && <p style={{ fontFamily: "Roboto Mono" }}>Sale Price: {product.reducedprice}</p>}
                        {/* <label>Qty:</label>
                        <button className='btn btn-danger m-2' onClick={() => decrement(setqty, 0)}>-</button>
                        <label className='qty'>{qty[0]}</label>
                        <button className='btn btn-danger m-2' onClick={() => increment(setqty, 0)}>+</button> */}
                        <button onClick={() => {
                            Check(product);
                        //    setcart([...cart, product]);
                        }
                            } className='btn btn-outline-primary fs-4'>🛒Add To Cart</button>
                        <br />
                        {/* <div className="d-flex align-items-center buy1">
                        <span className='btn-span fs-2'></span>
                        <button className='mt-5 fs-4 btn buy-btn' onClick={()=>{console.log("clo")}}>Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
