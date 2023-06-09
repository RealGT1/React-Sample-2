import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products';
import { Product } from '../pages/shop/product';
import { database } from '../config/firebase';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const cartRef = database.ref('cart');
    cartRef.on('value', (snapshot) => {
      const storedCart = snapshot.val();
      if (storedCart) {
        setCartItems(storedCart);
      } else {
        const defaultCart = getDefaultCart();
        setCartItems(defaultCart);
        cartRef.set(defaultCart);
      }
    });

    return () => {
      cartRef.off('value');
    };
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      database.ref('cart').set(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
      database.ref('cart').set(updatedCart);
      return updatedCart;
    });
  };

  const updateCartItemsCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: newAmount };
      database.ref('cart').set(updatedCart);
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === parseInt(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemsCount,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
