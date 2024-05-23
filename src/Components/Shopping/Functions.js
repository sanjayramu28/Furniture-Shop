
// import logo192
export const changeimg = (src) => {
    const main = document.querySelector(".main-img")
    main.src = src;
}

export const increment = (qty, setqty, index) => {
    // setqty(qty+1)
    setqty(prevQty => {
        const newquantity = [...prevQty]
        newquantity[index] += 1
        // prevQty + 1
        return newquantity

    });
}

export const decrement = (qty, setqty, index) => {
    // setqty(qty-1)

    setqty(prevQty => {
        const newquantity = [...prevQty]
        if (newquantity[index] > 1) {
            newquantity[index] -= 1
        }
        return newquantity
    });
}

export const Decreasetotalprice = (setTotalPrice, index, reducedprice,qty) => {
    setTotalPrice(prevprice => {
        const total = [...prevprice]
        total[index] -= reducedprice
        if (total[index] <= 0) {
            total[index]=reducedprice
        }
        // else total[index]+= reducedprice; }
        return total
    }
    )
}

export const Increasetotalprice = (setTotalPrice, index, reducedprice,qty) => {
    setTotalPrice(prevprice => {
        const total = [...prevprice]
        total[index] += reducedprice
        return total;
    }
    )
}
