import React, { createContext, useContext, useEffect, useState } from 'react'
import { getProdutoPorId } from '../data/products';

export const CartContext = createContext();

const CART_STORAGE_KEY = 'cart';
const CART_TTL_HOURS = 48;
const CART_TTL_MS = CART_TTL_HOURS * 60 * 60 * 1000;

const getCartFromStorage = () => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
        return [];
    }

    try {
        const parsed = JSON.parse(savedCart);

        // Novo formato com expiração
        if (parsed && !Array.isArray(parsed) && Array.isArray(parsed.items)) {
            if (typeof parsed.expiresAt === 'number' && Date.now() > parsed.expiresAt) {
                localStorage.removeItem(CART_STORAGE_KEY);
                return [];
            }

            return parsed.items;
        }

        // Compatibilidade com formato legado (array simples)
        if (Array.isArray(parsed)) {
            return parsed;
        }

        return [];
    } catch (error) {
        localStorage.removeItem(CART_STORAGE_KEY);
        return [];
    }
};

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItem] = useState(() => {
        const parsedCart = getCartFromStorage();

        // Reconstrói os itens do carrinho com os dados completos dos produtos
        return parsedCart.map(item => {
            const produto = getProdutoPorId(item.id);

            if (!produto) {
                return null;
            }

            return {
                ...produto,
                tamanho: item.tamanho,
                quantidade: item.quantidade
            };
        }).filter(Boolean);
    });

    useEffect(() => {
        // Salva apenas id, tamanho e quantidade no localStorage
        const items = cartItems.map(item => ({
            id: item.id,
            tamanho: item.tamanho,
            quantidade: item.quantidade
        }));

        const now = Date.now();
        const payload = {
            updatedAt: now,
            expiresAt: now + CART_TTL_MS,
            items
        };

        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
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