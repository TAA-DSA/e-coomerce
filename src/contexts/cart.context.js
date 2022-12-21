import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  //Revise
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //returns new array with modified cartItems/ new cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToremove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToremove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToremove.id);
  }

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToremove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, removeItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemsToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemsToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
