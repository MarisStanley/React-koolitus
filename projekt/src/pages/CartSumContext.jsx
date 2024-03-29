import React, { createContext, useState } from 'react';


const CartSumContext = createContext();

const CartSumContextProvider = ({ children }) => {
    const [cartSum, setCartSum] = useState(determineCartSum());


    function determineCartSum() {
        const cartLS = JSON.parse(localStorage.getItem("cart1")) || [];
        let sum = 0;
    cartLS.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum
        
    }

    return (
        <CartSumContext.Provider value={{ cartSum, setCartSum }}>
            {children}
        </CartSumContext.Provider>
    );
};

export { CartSumContext, CartSumContextProvider };