import React, { useState } from 'react';
// import main from "../"
import Category from '../Category';
import HomeFurns from './Homefurns';


export const data = [
    {
        title: "Luxurious ",
        type: "Bedroom",
        img: 'https://shorturl.at/ajLQS',
        originalprice: 1200,
        reducedprice: 1000,
        reviews: 55
    },
    {
        title: "Bedroom Furnitures",
        type: "Bedroom",
        originalprice: 2000,
        reducedprice: 1900,
        reviews: 40,
        img: 'https://i.pinimg.com/564x/da/a0/96/daa096738a04b93fb64cccff599d071b.jpg'
    },
    {
        title: "Cupboard Furnitures",
        type: "Bedroom",
        originalprice: 1000,
        reducedprice: 900,
        reviews: 40,
        img: 'https://i.pinimg.com/564x/0f/c7/98/0fc79894dc15ad8e0b9f4f3fcbbd8a0b.jpg'
    },
    {
        title: "Bedroom Furnitures",
        type: "Bedroom",
        originalprice: 5000,
        reducedprice: 4500,
        reviews: 42,
        img: 'https://i.pinimg.com/736x/0b/c7/51/0bc751c8ff96633fcdc39aad6c402288.jpg'
    },
    {
        title: "Sofa",
        type: "Sofa",
        originalprice: 3300,
        reducedprice: 3000,
        reviews: 41,
        img: 'https://i.pinimg.com/236x/51/8d/50/518d5025019ac7653367e04bc92dcfba.jpg'
    },
    {
        title: "Single Seated",
        type: "Sofa",
        originalprice: 4000,
        reducedprice: 3500,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg'
    },
    {
        title: "Hall sofa",
        type: "Sofa",
        originalprice: 4000,
        reducedprice: 3900,
        reviews: 90,
        img: 'https://i.pinimg.com/236x/4d/54/7d/4d547de1ca0f49e82facc8943b7b06ee.jpg'
    },
    {
        title: "Hall Sofa",
        type: "Sofa",
        originalprice: 2000,
        reducedprice: 1900,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/e1/0f/35/e10f356855414bf09274f7070e2a17f8.jpg'
    },
    {
        title: "Hall Sofa",
        type: "Hall,Sofa",
        originalprice: 3000,
        reducedprice: 2900,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/6f/a5/6c/6fa56c61d5aab7f947e00a1cb028e370.jpg'
    },
    {
        title: "Long Sofa",
        type: "Sofa",
        originalprice: 6000,
        reducedprice: 5900,
        reviews: 20,
        img: 'https://i.pinimg.com/236x/75/72/e3/7572e3d4a059f33d8705dce2e846334c.jpg'
    },
    {
        title: "CupBoard Furnitures",
        type: "Bedroom",
        originalprice: 2000,
        reducedprice: 1900,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/15/c2/e1/15c2e11d10b2b44c6d3bda01d5b3b710.jpg'
    },
    {
        title: "Mirror",
        type: "Bedroom",
        originalprice: 2000,
        reducedprice: 1900,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/36/36/c6/3636c6abbd9701a2316b99729c28c5f8.jpg'
    },
    {
        title: "Stylish Furnitures",
        type: "Hall",
        originalprice: 2000,
        reducedprice: 1900,
        reviews: 40,
        img: 'https://i.pinimg.com/236x/87/bd/fc/87bdfc044105fab68f5051495e134544.jpg'
    }
]


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
        if (selected) {
            const [minPrice, maxPrice] = selected.split('-').map(price => parseInt(price.trim()));
            filteredproducts = filteredproducts.filter(({ originalprice, type }) =>
                originalprice >= minPrice && originalprice <= maxPrice ||
                type == selected
            );
            console.log(filteredproducts)
        }

        if (filteredproducts == "") {
            return (
                <>
                    <div className=" mt-5 " style={{ display:"block"}}>
                        <div>
                            <p className='text-center'>Oops no product Found</p>
                        </div>
                    </div>
                </>
            )
        }

        return filteredproducts.map((item) => (
            <HomeFurns
                img={item.img}
                title={item.title}
                reviews={item.reviews}
                originalprice={item.originalprice}
                reducedprice={item.reducedprice}
            />
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
                                <Category name="category" category="Rs:  1000-2000" value={"1000-2000"} handleclick={handleclick} />
                                <Category name="category" category="Rs:  2000-3000" value={"2000-3000"} handleclick={handleclick} />
                                <Category name="category" category="Rs:  3000-4000" value={"3000-4000"} handleclick={handleclick} />
                                <Category name="category" category="Rs:  4000-5000" value={"4000-5000"} handleclick={handleclick} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap col-lg-9 mt-4'>
                    {
                        filtered()
                    }
                </div>
            </div>

        </>
    )

}

export default HomeFurnitures