import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    if (checkProductInCart) {
      // Update the quantity of an existing product
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      // Add a new product
      const productWithQuantity = { ...product, quantity };
      setCartItems([...cartItems, productWithQuantity]);
    }

    // Update total price and quantity
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    toast.success(` ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (foundProduct) {
      const newCartItems = cartItems.filter((item) => item._id !== product._id);

      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }
  };

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);

    if (foundProduct) {
      const newCartItems = cartItems.map((item) => {
        if (item._id === id) {
          const newQuantity = value === 'inc' ? item.quantity + 1 : item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity > 0 ? newQuantity : 1,
          };
        }
        return item;
      });

      setCartItems(newCartItems);

      // Update total price and quantity
      const priceChange = foundProduct.price * (value === 'inc' ? 1 : -1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + priceChange);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + (value === 'inc' ? 1 : -1));
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
