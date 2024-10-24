import React, { useState } from 'react';
// import main from "../"
import Category from '../Category';
import HomeFurns from './Homefurns';
import { data } from '../db';
import { Link } from 'react-router-dom';



const HomeFurnitures = () => {
    const [selected, setselected] = useState("")
    const handleclick = (event) => {
        setselected(event.target.value)
        console.log("Click")
    }
    const filtered = () => {
        console.log("Called")
        console.log(selected)
        let filteredproducts = data;
        if (selected == "5000&Above") {
            filteredproducts = filteredproducts.filter(({ originalprice }) =>
                originalprice > 5000
            );
        }
        else if (selected) {
            const [minPrice, maxPrice] = selected.split('-').map(price => parseInt(price.trim()));
            filteredproducts = filteredproducts.filter(({ originalprice, type }) =>
                originalprice >= minPrice && originalprice <= maxPrice ||
                type == selected
            );
            console.log(filteredproducts)
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

        return filteredproducts.map((item) => (
            <Link to={`/product/${item.title}/${item.id}`} style={{textDecoration:"none",color:"black"}}>
            <HomeFurns
                img={item.img}
                title={item.title}
                reviews={item.reviews}
                originalprice={item.originalprice}
                reducedprice={item.reducedprice}
            />
            </Link>
        ))

    }
    return (
        <>
            <div className="bg-light p-5">
                <h3 className='text-center m-3'>Home Furnitures</h3>
                <p className='d-flex justify-content-center fs-3'>
                    <a href='Home' className='text-decoration-none text-info'>Home</a>
                    <p>/Home Furnitures</p>
                </p>
            </div>
            <div className="row d-flex">
                <div className="sidebar mt-5 col-lg-3"  >
                    <div className='d-flex justify-content-start  bg-light p-5 ms-3'>
                        <div>
                            <h4>Category</h4>
                            <div className="ms-3 category fs-3" style={{ fontFamily: "Bebas Neue" }} category>
                                <input type="radio" value="" name="category" onClick={handleclick} />
                                <span className="ms-3">All</span>
                            </div>
                            {/* <Category name="category" value="All" handleclick={handleclick} /> */}
                            <Category name="category" value="Bedroom" handleclick={handleclick} />
                            <Category name="category" value="Sofa" handleclick={handleclick} />
                            <Category name="category" value="Hall" handleclick={handleclick} />
                            <Category name="category" value="Dining" handleclick={handleclick} />
                            <div>
                                <h4>Price</h4>
                                <Category name="category" category="Rs:  1000-2000" value={"1000-2000"} sym="💸" handleclick={handleclick} />
                                <Category name="category" category="Rs:  2000-3000" value={"2000-3000"} sym="💸" handleclick={handleclick} />
                                <Category name="category" category="Rs:  3000-4000" value={"3000-4000"} sym="💸" handleclick={handleclick} />
                                <Category name="category" category="Rs:  4000-5000" value={"4000-5000"} sym="💸" handleclick={handleclick} />
                                <div className="ms-3 category fs-3" style={{ fontFamily: "Bebas Neue" }} category>
                                    <input type="radio" value="5000&Above" name="category" onClick={handleclick} />
                                    <span className="ms-3">💸5000&Above</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap col-lg-9 mt-4 justify-content-center'>
                    {
                        filtered()
                    }
                </div>
            </div>

        </>
    )

}

export default HomeFurnitures