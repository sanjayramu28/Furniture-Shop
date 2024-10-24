import React, { useContext, useEffect, useState } from 'react';

import { cartItems } from '../../App';
import { Decreasetotalprice, Increasetotalprice, decrement, increment, totalprice } from '../Shopping/Functions';
import { Link } from 'react-router-dom';


const Cart = () => {
  const data = useContext(cartItems);
  const parsedata = JSON.parse(data);
  const initialQuantity = parsedata.map(item => item.initialQuantity);
  const initialprice = parsedata.map(item => item.reducedprice)
  const [qty, setqty] = useState(initialQuantity)
  const [TotalPrice, setTotalPrice] = useState(initialprice)  

  return (
    <div className='container-fluid'>

      <h3>Cart</h3>
      {
      parsedata.map((item, index) => (

        <div className='row  m-5 d-flex cart-items' key={index} >
          <div className="col-lg-2">
            <img src={item.img} className=' cart-img ' />
          </div>
          <div className="col-lg-8 d-flex align-items-center">
            <div className="col-7 h-100 d-flex align-items-center">
              <div>
                <p style={{ fontFamily: "Poetsen One" }}>{item.title}</p>
                <label style={{ fontFamily: "Roboto Slab" }}>Price: {item.price}</label>
                &nbsp;
                <label className='ms-5' style={{ fontFamily: "Roboto Slab" }}>Reduced Price:{item.reducedprice}</label>
              </div>
            </div>
            <div className="col-5 h-100 d-flex align-items-center" style={{ zIndex: 99 }}>
              <div className="align-items-center">
                <label>Qty:</label>
                <button className='btn btn-danger m-2' onClick={() => {
                  decrement(qty, setqty, index)
                  Decreasetotalprice(setTotalPrice, index, item.reducedprice, qty[index])
                }}>-</button>
                <label className='qty'>{qty[index]}</label>
                <button className='btn btn-danger m-2' onClick={() => {
                  increment(setqty, index)
                  Increasetotalprice(setTotalPrice, index, item.reducedprice, qty[index])
                }}>+</button>
              </div>
              <label className='ms-5'>Total:{TotalPrice[index]}</label>
            </div>
            <div className="buy col-1">
            <Link to= {`/Buy/${item.title}`} state={{item, qty:qty[index],TotalPrice:TotalPrice[index]}}>
                <button className='btn  buy-btn text-dark' 
                // onClick={()=>{
                //   values(item.title)
                // }}
                 >Buy Now</button>
              </Link>
              <button className='btn d-flex'> 🗑️</button>
            </div>
          </div>
        </div>
      ))}


      {/* <p>{[parsedata]}</p> */}
    </div>
  );
};

export default Cart;
