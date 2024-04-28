import React from "react";

const Category = ({ handleclick, name, category, value,sym }) => {

    
    return (
        <>
            
            <div className="ms-3 category" style={{fontFamily:"Bebas Neue"}}>
                <input type="radio" value={value} name={name} onClick={handleclick} />
                <span className="ms-3 fs-3">{sym}{value}</span>
            </div>
        </>
    )
}

export default Category