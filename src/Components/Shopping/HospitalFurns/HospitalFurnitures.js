import React, { useState } from 'react'
import OfficeFurnitures from '../Office Furns/OfficeFurnitures'
import { Hospital_Furns } from "../db"
import HospitalFurns from "./HospitalFurns"
import Category from '../Category'
import { Link } from 'react-router-dom'

const HospitalFurnitures = () => {
  // hello="hello";
  

  const [selected, setselected] = useState()
  const handleclick = (event) => {
    setselected(event.target.value);
  }

  const filtered = () => {
    let filteredproducts = Hospital_Furns;
    if (selected == "4000&Above") {
      filteredproducts = filteredproducts.filter(({ price }) =>
        price >= 4000
      )
    }

    else if (selected) {
      const [min, max] = selected.split("-").map(price => parseInt(price.trim()))
      filteredproducts = filteredproducts.filter(({ category, price }) =>
        price >= min && price <= max ||
        category == selected
      )
    }

    else if (filteredproducts == "") {
      return (
        < >
          <div className=" mt-5 " style={{ display: "block" }}>
            <div>
              <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?w=740&t=st=1714656443~exp=1714657043~hmac=d3e00cccc4bddd6f2ea4e0219ead6b3af05a96b85631312892c77a84255332be" alt="No Products bro!" style={{ height: "600px" }} />
              <p className='text-center fs-2' style={{ fontFamily: "Sedgwick Ave Display" }}>!!Oops no product Found!!</p>
            </div>
          </div>
        </>
      )
    }


    return (
      filteredproducts.map((item) => (
        <>
        <Link to={`/product/${item.title}`} key={item.title} style={{ textDecoration: 'none' }} >
        <HospitalFurns 
          title={item.title}
          img={item.img}
          price={item.price}
          reduced={item.reducedprice}
          />
          </Link>
        </>
      ))
    )

  }

  // filtered()

  return (
    <>
    
      <div className="row">
        <div className='m-2 col-lg-2 '>
          <h2>Category</h2>
          <div className="ms-3 category fs-3" style={{ fontFamily: "Bebas Neue" }}>
            <input type="radio" value="" name='Hospital' onClick={handleclick} />
            <span className='ms-3'>All</span>
          </div>
          <Category name="Hospital" value="Care" handleclick={handleclick} />
          <Category name="Hospital" value="Waiting" handleclick={handleclick} />
          <h2>PRICE</h2>
          <Category name="Hospital" value="1000-2000" sym="💸" handleclick={handleclick} />
          <Category name="Hospital" value="2000-3000" sym="💸" handleclick={handleclick} />
          <Category name="Hospital" value="3000-4000" sym="💸" handleclick={handleclick} />
          <Category name="Hospital" value="4000&Above" sym="💸" handleclick={handleclick} />
        </div>
        <div className="col-lg-9 d-flex flex-wrap">
          {
            filtered()
          }
        </div>
      </div>
    </>
  )
}

export default HospitalFurnitures
