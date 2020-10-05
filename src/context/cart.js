// cart context
import React, { useState, useEffect } from 'react';
// import localCart from '../utils/localCart';

// Get Cart From Local Storage:

function getCartFromLocalStorage() {
  // Si es TRUE: Devuelve el CART, else EMPTY ARRAY
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  // Variables:
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  // Use Effect
  useEffect(() => {
    // Local Storage:
    localStorage.setItem('cart', JSON.stringify(cart));

    // Quantity of Items:
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // Cart Total Price:
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2)); // Convertimos A FLOAT con 2 Decimales.
    setTotal(newTotal);
    // Only Reload when CART ARRAY Changes
  }, [cart]);

  // Remove Items:
  const removeItem = (id) => {
    //Tendra todos los items que no coincidan con el ID del clickeado.
    setCart([...cart].filter((item) => item.id !== id));
  };
  // Increase Amount:
  const increaseAmount = (id) => {
    // New Array = Map de all items in cart.
    const newCart = [...cart].map((item) => {
      // Para el item Clickeado : Amount = Amount+1
      // El resto: mantener sus propiedades
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };
  // Decrease Amount:
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };
  // Add to Cart:
  const addToCart = (product) => {
    // Destructure la Data needed, para crear el Cart Item Article:
    const { id, image, title, price } = product;
    // Already in cart? Increase Amount:
    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      // Else: Crear un nuevo item de amount 1 + propiedades
      const newItem = { id, image, title, price, amount: 1 };
      // Agregar nuevo item al New Array (antiguo + nuevo)
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  // Clear Cart:
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
