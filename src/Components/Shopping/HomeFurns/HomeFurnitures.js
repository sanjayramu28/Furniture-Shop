import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';
const HomeFurnitures = () => {
const data=[
    {
        img:'https://shorturl.at/ajLQS'
    },
    {
        img:'https://i.pinimg.com/564x/da/a0/96/daa096738a04b93fb64cccff599d071b.jpg'
    },
    {
        img:'https://i.pinimg.com/564x/0f/c7/98/0fc79894dc15ad8e0b9f4f3fcbbd8a0b.jpg'
    },
    {
        img:'https://i.pinimg.com/736x/0b/c7/51/0bc751c8ff96633fcdc39aad6c402288.jpg'
    }
]

    return (
       <>
       <div className="bg-light p-5">
        <h3 className='text-center m-3'>Home Furnitures</h3>
        <p className='d-flex justify-content-center fs-3'>
        <a href='Home' className='text-decoration-none text-info'>Home</a>
        <p>/Home Furnitures</p>
        </p>
       </div>
       </>
    )
}


export default HomeFurnitures