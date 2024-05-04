import react from 'react'
import { data } from './HomeFurnitures'

const HomeFurns = ({ img, title, reviews, originalprice, reducedprice }) => {
  return (
    <div className="home-furns d-block ">
      <div className="home-pro  bg-light p-3" style={{height:"400px"}}>
        <div className='home-pro1'>
          <img src={img} alt={title} />
          <h2 style={{ fontFamily:"Roboto Condensed"}} >{title}</h2>
          <p style={{fontFamily:"Montserrat"}}>Reviews: {reviews}</p>
          <p style={{fontFamily:"Caveat"}} className='fs-3'>Price: {originalprice}</p>
        </div>
      </div>
    </div>

  );
}

export default HomeFurns