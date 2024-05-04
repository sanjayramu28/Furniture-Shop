import React from 'react'

const HospitalFurns = ({ title, img, price, reduced }) => {
  return (
    <div className='hospital text-dark text-decoration-none' >
      <div className='m-3  bg-light p-3' >
        <img src={img} />
        <p className='text-center fs-3' style={{ fontFamily: "Teko" }}>{title}</p>
        <div className="d-flex justify-content-center gap-3" style={{ fontFamily: "Inconsolata"}}>
          <p className='text-decoration-line-through '>Rs.{price}</p>
          <p >Rs.{reduced}</p>
        </div>

      </div>
    </div>
  )
}

export default HospitalFurns
