import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OfficeFurns = ({img,title,price,reducedprice}) => {
  return (
    <div className='office'>
        <div className="office-furns bg-light">
            <div>
                <img src={img}/>
                <p className='text-center fs-4' style={{fontFamily:"Teko"}}>{title}</p>
                <div className="d-flex justify-content-center " style={{fontFamily:"Inconsolata",alignContent:"center"}}>
                <p className='fs-5'>
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </p>
                <p className='text-decoration-line-through ms-1 me-3'>{price}</p>
                <p className='fs-5 me-1'>
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </p>
                <label className='text-danger'>For You:</label>
                <p>{reducedprice}</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OfficeFurns
