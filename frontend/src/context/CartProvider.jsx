import React, { createContext, useContext, useEffect, useState } from 'react'
import { getProdutoPorId } from '../data/products';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            // Reconstrói os itens do carrinho com os dados completos dos produtos
            return parsedCart.map(item => {
                const produto = getProdutoPorId(item.id);
                return {
                    ...produto,
                    tamanho: item.tamanho,
                    quantidade: item.quantidade
                };
            });
        }
        return [];
    });

    useEffect(() => {
        // Salva apenas id, tamanho e quantidade no localStorage
        const cartToSave = cartItems.map(item => ({
            id: item.id,
            tamanho: item.tamanho,
            quantidade: item.quantidade
        }));
        localStorage.setItem('cart', JSON.stringify(cartToSave));
    }, [cartItems]);

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

    const decreaseQuantity = (produtoId, tamanho) => {
        setCartItem((prevItems) => {
            return prevItems.flatMap(item => {
                if (item.id === produtoId && item.tamanho === tamanho) {
                    if (item.quantidade > 1) {
                        return { ...item, quantidade: item.quantidade - 1 };
                    }

                    return [];
                }
                return item;
            });
        });
    };

    const increaseQuantity = (id, tamanho) => {
        setCartItem((prevItems) =>
            prevItems.map(item =>
                item.id === id && item.tamanho === tamanho
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );
    };

    const removeFromCart = (produtoId, tamanho) => {
        setCartItem((prevItems) =>
            prevItems.filter(item => !(item.id === produtoId && item.tamanho === tamanho))
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantidade, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount, decreaseQuantity, increaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);