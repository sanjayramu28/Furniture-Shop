import React from "react";
import './main.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import home_chair from '../Assests/Home_chair.png';
import sofa from '../Assests/Sofa.png';
import bed from '../Assests/bedroomfurnitures.jpg';
import living from '../Assests/living funrniture.jpg';
import dining from '../Assests/Dinner Furnitures.jpg';
import office from '../Assests/office chairs.jpg';
import sofaL from '../Assests/SofaLiving.jpeg';
import square from '../Assests/sqChair.png';
import pot from '../Assests/pot.png';
import Vshape from '../Assests/vShaped chair.png';
import cupboard from '../Assests/cupboard.png';
import four from '../Assests/four.png';
import singleSofa from '../Assests/singleSofa.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import home1 from '../Assests/home1.png';
import home2 from '../Assests/home2.png';
import 'react-tabs/style/react-tabs.css';
const Home = () => {
    let offer1 = '../Assests/offer1.jpg'

    const Home_products = [
        {
            key: 1,
            url: home_chair,
            p1: 'New products',
            p2: 'Flexible chairs'
        },
        {
            key: 2,
            url: sofa,
            p1: 'Best Seller',
            p2: 'Creative Sofas'
        }

    ]

    const Home_links = [
        {
            key: 1,
            img: bed,
            title: 'Bedroom'
        },
        {
            key: 2,
            img: living,
            title: 'Living '
        },
        {
            key: 3,
            img: dining,
            title: 'Dining'
        },
        {
            key: 4,
            img: office,
            title: 'Office Chairs'
        }
    ]

    const New_Arrival = [
        {
            id: 1,
            title: 'Living Room Sets',
            img: 'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75',
            price: 154.0,
            discount: 0
        },
        {
            id: 2,
            title: 'Sofa For Living Room',
            img: sofaL,
            price: 130.0,
            discount: 15
        },
        {
            id: 3,
            title: 'Pillowed Chair',
            img: square,
            price: 21.0,
            discount: 10
        },
        {
            id: 4,
            title: 'Flower Pots',
            img: pot,
            price: 39.0,
            discount: 0
        },
        {
            id: 5,
            title: 'V-Shaped Chair',
            img: Vshape,
            price: 111.0,
            discount: 11
        },
        {
            id: 6,
            title: 'CupBoard',
            img: cupboard,
            price: 80.0,
            discount: 0
        },
        {
            id: 7,
            title: 'Four Legged Chairs',
            img: four,
            price: 85.0,
            discount: 18
        },
        {
            id: 8,
            title: 'Single Seated Sofa',
            img: singleSofa,
            price: 29,
            discount: 34
        }
    ]

    const new_mini = [
        {
            // id: 1,
            img: home1,
            img2: home2
        },
        {
            id: 3,
            img: home1
        }
    ]
    console.log(new_mini[0])

    // const observer=new IntersectionObserver((entries)=>{
    //     entries.forEach((entry)=>{
    //         if(entry.isIntersecting){
    //             console.log("jh")
    //             entry.target.classList.add('show');
    //         }
    //         else{
    //             entry.target.classList.remove('show');
    //         }
    //     })
    // })

    // const hidden=document.querySelectorAll('.home-img');
    // hidden.forEach((el)=>observer.observe(el))


    return (

        <div className="container-fluid">
            <Carousel className="crsl" autoPlay={true} showThumbs={false} showStatus={false}>
                {
                    Home_products.map((pro, i) => {
                        return (
                            <div className="pre-pro" key={i}>
                                <div className="row pre-left">
                                    <div className="col-md-6 products">
                                        <div className="" >
                                            <p>{pro.p1}</p>
                                            <p>{pro.p2}</p>
                                            <br />
                                            <label>Torem ipsumsdfs shdgjhd hbhcfg</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 products">
                                        <img src={pro.url} className="home-img" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Carousel>
            <div className="home-products mt-5">
                {
                    Home_links.map((link, i) => {
                        return (
                            <div className="link" key={i}>
                                <img src={link.img} className="Home-link-img" />
                                <p>{link.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5">
                <p className="d-flex justify-content-center fs-4 fw-bold">Our Products</p>
                <p className="d-flex justify-content-center fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            </div>
            <Tabs>
                <TabList className="d-flex justify-content-center">
                    <Tab>New Arrival</Tab>
                    <Tab>Featured</Tab>
                    <Tab>On Sale</Tab>
                </TabList>

                <TabPanel className="new-arrive-tab">
                    {
                        New_Arrival.map((map, i) => {
                            let discount = map.discount / 100;
                            let price = map.price * discount;
                            let ogprice = map.price - price.toFixed(1);
                            return (
                                <div key={i}>
                                    <div className="new-arrivals mt-5">
                                        <p className="discount">-{map.discount}%</p>
                                        <img src={map.img} className="new-img bg-light img-rounded" />
                                        <p className="text-center mt-3">{map.title}</p>
                                        <div className="d-flex">
                                            <p className="text-decoration-line-through me-3 fs-4">${map.price}</p>
                                            <label className="fs-4">${ogprice}</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </TabPanel>
                <TabPanel >

                    <p className="d-flex justify-content-center mt-5 flex-wrap" >
                        <img src="https://cdn-icons-png.flaticon.com/128/8863/8863863.png" style={{ width: '200px', height: '200px' }} />
                    </p>
                    <br />
                    <h2 className="d-flex justify-content-center">Oops!!No products available Now</h2>
                </TabPanel>
                <TabPanel className="new-arrive-tab">
                    {
                        New_Arrival.map((map, i) => {
                            let discount = map.discount / 100;
                            let price = map.price * discount;
                            let ogprice = map.price - price.toFixed(1);
                            return (
                                <div key={i}>
                                    <div className="new-arrivals mt-5">
                                    <p className="discount">-{map.discount}%</p>
                                        <img src={map.img} className="new-img bg-light img-rounded" />
                                        <p className="text-center mt-3">{map.title}</p>
                                        <div className="d-flex">
                                            <p className="text-decoration-line-through me-3 fs-4">${map.price}</p>
                                            <label className="fs-4">${ogprice}</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </TabPanel>
            </Tabs>
            <div className="news  mt-5">
                <h2 className="d-flex justify-content-center">Latest News</h2>
                <p className="d-flex justify-content-center mt-3">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
                <div className="d-flex justify-content-center">
                    <img src="https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3950.jpg?w=740" />
                </div>
                <p className="d-flex justify-content-center ">Oops! Currently No Atricles available</p>
            </div>
        </div>
    )
}

export default Home