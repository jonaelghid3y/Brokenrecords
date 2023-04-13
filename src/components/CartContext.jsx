import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
