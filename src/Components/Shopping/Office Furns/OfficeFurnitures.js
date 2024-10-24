import React, { useContext, useState } from "react";
import { office_Furns } from "../db";
import 'boxicons'
import Category from "../Category";
import OfficeFurns from "./OfficeFurns";
import { Link } from "react-router-dom";

const OfficeFurnitures = ({ img }) => {
    const [selected, setselected] = useState()
    
    const handleclick = (event) => {
        setselected(event.target.value)
    }

    const filtered = () => {
        let filteredproducts = office_Furns;
        if (selected ==="4000&Above") {
            filteredproducts = filteredproducts.filter(({ price }) =>
                price>=4000
            );
        }

       else if(selected) {
            const [min, max] = selected.split("-").map(price => parseInt(price.trim()))
            filteredproducts = filteredproducts.filter(({ category, price }) =>
                price >= min && price <= max ||
                category == selected
            );
            console.log(filteredproducts)

        }

        return (
            filteredproducts.map((item) => (
                <Link to={`/product/${item.title}/${item.id}`} key={item.title} style={{ textDecoration: 'none' }} >
                <OfficeFurns
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    reducedprice={item.reducedprice}
                />
                </Link>
            ))
        )
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-3 sidebar ">
                    <div className=" bg-light p-5 ms-3 mb-5">
                        <div className="category ms-3 fs-3"  style={{fontFamily:"Bebas Neue"}}>
                        <input type="radio" name="Chairs" value="" onClick={handleclick}/>
                        <span className="ms-3">All</span>
                        </div>
                        <Category value="Chairs" name="Chairs" handleclick={handleclick} />
                        <Category value="Table" name="Chairs" handleclick={handleclick} />
                    </div>
                    <div className=" bg-light p-5 ms-3">
                    
                        <Category sym="💸" value="1000-2000" name="Chairs" handleclick={handleclick} />
                        <Category sym="💸" value="2000-3000" name="Chairs" handleclick={handleclick} />
                        <Category  sym="💸"value="3000-4000" name="Chairs" handleclick={handleclick} />
                        <div className="category ms-3 fs-3" style={{fontFamily:"Bebas Neue"}}>
                            <input type="radio" name="Chairs" value="4000&Above" onClick={handleclick} />
                            <span className="ms-3">💸4000 & Above</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 d-flex flex-wrap">
                    {/* <OfficeFurns /> */}
                    {
                        filtered()
                    }
                </div>
            </div>
            
            {/* <HospitalFurnitures hello="Hello"/> */}
            {/* <Outlet /> */}

        </>
    )

}



export default OfficeFurnitures