import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Hospital_Furns } from '../Shopping/db';
import { carts, changeimg, decrement, increment } from '../Shopping/Functions';
import { Button } from 'bootstrap';
import Cart from '../Cart/Cart';
// import { parse } from 'dotenv';
// import { json } from 'body-parser';

 export const localcart = () => {
  const data = localStorage.getItem("CARTS")
  console.log(data)

  console.log("loc1")
  if (data == "undefined") {
    return []
  }
  else {
    return JSON.parse(data)
  }
  
  
}
const ProductView = () => {

  
  const [qty, setqty] = useState(1)
  const [cart, setcart] = useState(localcart())

  console.log(cart)

  useEffect(() => {
    window.localStorage.setItem("CARTS", JSON.stringify(cart))
  }, [cart])



  const { productId } = useParams();
  const product = Hospital_Furns.find(item => item.title === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <span className='fs-2 ms-5'>
        <NavLink to="/" >Home</NavLink>/<label>{product.title}</label>
      </span>
      <br />
      <div className="mt-5 row" >
        <div className="col d-flex justify-content-center ms-5">
          <div className="d-flex flex-column side-img" >
            <img src={product.img1} onMouseEnter={() => changeimg(product.img1)} />
            <img src={product.img2} onMouseEnter={() => changeimg(product.img2)} />
            <img src={product.img3} onMouseEnter={() => changeimg(product.img3)} />
          </div>
          <img src={product.img} alt={product.title} className='border border-2  main-img' style={{ width: "600px", height: "500px" }} />
        </div>
        <div className="col d-flex align-items-center ms-5">
          <div>
            <h3 style={{ fontFamily: "Jaini Purva", fontSize: "60px" }}>{product.title}</h3>
            <p style={{ fontFamily: "Roboto Mono" }}>Price: {product.price}</p>
            {product.reducedprice && <p style={{ fontFamily: "Roboto Mono" }}>Sale Price: {product.reducedprice}</p>}
            <label>Qty:</label>
            <button className='btn btn-danger m-2' onClick={() => decrement(qty, setqty)}>-</button>
            <label className='qty'>{qty}</label>
            <button className='btn btn-danger m-2' onClick={() => increment(qty, setqty)}>+</button>
            <button onClick={() => {
              setcart([...cart, product])
              console.log(cart)
            }}>Add To Cart</button>
            <br />
            <button className='mt-5 btn btn-primary'  >Buy Now</button>
          </div>
        </div>
      </div>
      <Cart />
      {/* <Cart items={cart} /> */}
    </div>
  );
};

export default ProductView;
