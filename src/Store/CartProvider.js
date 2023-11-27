import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const availableProducts = [
    {
      id: 0,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1
    },
    {
      id: 1,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1
    },
    {
      id: 2,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1
    },
    {
      id: 3,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1
    },
  ];

  const addItemToCartHandler = (id) => {
    const selectedProduct = availableProducts.find((product) => product.id === id);
    const cartItem = items.find((item) => item.id === id);
    if (cartItem) {
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const item = items[itemIndex];
      const newItems = [...items];
      if (item.quantity > 1) {
        newItems[itemIndex] = { ...item, quantity: item.quantity - 1 };
      } else {
        newItems.splice(itemIndex, 1);
      }

      setItems(newItems);
    }
  };

  const cartContext = {
    availableItems: availableProducts,
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
