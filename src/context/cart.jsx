import { createContext, useState } from 'react'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // first if the product is already in the cart
    // setCart([...cart, product])
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(productInCartIndex <= 0){
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1 
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart, 
      clearCart
    }} >
      {children}
    </CartContext.Provider >
  )
}