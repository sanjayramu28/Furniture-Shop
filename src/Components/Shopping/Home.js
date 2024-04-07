import React from "react";
import './main.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import home_chair from '../Assests/Home_chair.png';
import sofa from '../Assests/Sofa.png';
import bed from '../Assests/bedroomfurnitures.jpg';
import living from'../Assests/living funrniture.jpg';
import dining from '../Assests/Dinner Furnitures.jpg';
import office from '../Assests/office chairs.jpg';
// import { Routes, Route } from "react-router-dom";
const Home = () => {

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

    const Home_links=[
        {
            key:1,
            img:bed,
            title:'Bedroom'
        },
        {
            key:2,
            img:living,
            title:'Living '
        },
        {
            key:3,
            img:dining,
            title:'Dining'
        },
        {
            key:4,
            img:office,
            title:'Office Chairs'
        }
    ]
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
                    Home_products.map((pro) => {
                        return(
                            <div className="pre-pro">
                                <div className="row pre-left">
                                    <div className="col-md-6 products">
                                        <div className="">
                                            <p>{pro.p1}</p>
                                            <p>{pro.p2}</p>
                                            <br />
                                            <label>Torem ipsumsdfs shdgjhd hbhcfg</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 products">
                                        <img src={pro.url} className="home-img animate" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Carousel>
            <div className="home-products mt-5">
                {
                    Home_links.map((link)=>{
                        return(
                            <div className="link">
                            <img src={link.img} className="Home-link-img"/>
                            {/* <br/> */}
                            <p>{link.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p>jhkh</p>
            <p>jhkh</p>
            <p>jhkh</p>
            <p>jhkh</p>
            <p>jhkh</p>
            <p>jhkh</p>
        </div>
    )
}

export default Home