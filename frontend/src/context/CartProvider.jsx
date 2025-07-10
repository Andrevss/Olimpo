import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItem] = useState([]);

    const addToCart = (produto, tamanho) => {
        setCartItem((prevItems) => {
            const existingItem = prevItems.find(
                item => item.id === produto.id && item.tamanho === tamanho
            );

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === produto.id && item.tamanho === tamanho
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }

            return [
                ...prevItems,
                {
                    ...produto,
                    tamanho,
                    quantidade: 1,
                    imagemFrente: produto.imagemFrente
                }
            ];
        });
    };


    const cartCount = cartItems.reduce((total, item) => total + item.quantidade, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);