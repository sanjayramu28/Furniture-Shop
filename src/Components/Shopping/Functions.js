
// import logo192
export const changeimg = (src) => {
    const main = document.querySelector(".main-img")
    main.src = src;
}

export const increment=(qty,setqty)=>{
    setqty(qty+1)
}

export const decrement=(qty,setqty)=>{
    setqty(qty-1)
}


export const carts=(product,cart1)=>{
    // setcart(cart => cart.concat(product));
    // setcart([...cart, product]);
    cart1+=product

    // setcart(cart => [...cart, product]);
    console.log(product)
}