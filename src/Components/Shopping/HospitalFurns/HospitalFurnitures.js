import React, { useState } from 'react'
import OfficeFurnitures from '../Office Furns/OfficeFurnitures'
import { Hospital_Furns } from "../db"
import HospitalFurns from "./HospitalFurns"
import Category from '../Category'

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

    else if(selected) {
      const [min, max] = selected.split("-").map(price => parseInt(price.trim()))
      filteredproducts=filteredproducts.filter(({ category, price }) =>
        price >= min && price <= max ||
        category == selected
      )
    }


    return (
      filteredproducts.map((item) => (
        <HospitalFurns
          title={item.title}
          img={item.img}
          price={item.price}
          reduced={item.reducedprice}
        />
      ))
    )

  }

  // filtered()

  return (
    <>
      <div className="row">
        <div className='m-2 col-lg-2 '>
          <h2>Category</h2>
          <div className="ms-3 category fs-3" style={{fontFamily:"Bebas Neue"}}>
            <input type="radio" value="" name='Hospital' onClick={handleclick}/>
            <span className='ms-3'>All</span>
          </div>
          <Category name="Hospital" value="Care" handleclick={handleclick} />
          <Category name="Hospital" value="Waiting" handleclick={handleclick} />
          <h2>PRICE</h2>
          <Category name="Hospital" value="1000-2000" handleclick={handleclick} />
          <Category name="Hospital" value="2000-3000" handleclick={handleclick} />
          <Category name="Hospital" value="3000-4000"  handleclick={handleclick}/>
          <Category name="Hospital" value="4000&Above" handleclick={handleclick} />
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
