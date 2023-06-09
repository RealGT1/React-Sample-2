import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
import { Product } from '../pages/shop/product';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  }
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

const addToCart = (itemId) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  });
};

const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  });
};

const updateCartItemsCount = (newAmount, itemId) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev, [itemId]: newAmount };
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  });
};

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    //loop through an object
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemsCount, getTotalCartAmount }}>
      {props.children}
    </ShopContext.Provider>
  )
}
