import React from "react";

const CartContext = React.createContext({
    availableItems: [],
    items: [],
    cartLength: 0,
    totalAmount: 0,
    getTotalItems: () => {},
    addItem: (item) => {},
    removeItem: (id) => {},
})

export default CartContext;