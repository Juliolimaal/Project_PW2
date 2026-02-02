'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // 1. Carregar do LocalStorage ao abrir o site
  useEffect(() => {
    const savedCart = localStorage.jk_cart 
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // 2. Salvar no LocalStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('jk_cart', JSON.stringify(cart))
  }, [cart])

  // Função para adicionar item
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === product.name)
      if (existing) {
        return prev.map(item => 
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsCartOpen(true) 
  }

  // Função para remover item
  const removeFromCart = (productName) => {
    setCart(prev => prev.filter(item => item.name !== productName))
  }

  // Função para limpar tudo (usada após pagamento)
  const clearCart = () => {
    setCart([])
  }

  // Calcular total
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0)
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, clearCart, 
      isCartOpen, setIsCartOpen, cartTotal, cartCount 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)