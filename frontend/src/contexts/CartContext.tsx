import { createContext, useState } from 'react'

export interface ProductProps {
  _id: number
  name: string
  brand: string
  price: number
  photo: {
    url: string
  }[]
  description: string
  qtInStock: number
  qtSold: number
}

interface CartContextProps {
  cart: Array<ProductProps>
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductProps[]>([])

  const addToCart = (product: ProductProps) => {
    setCart([...cart, product])
    alert('Product added to cart!')
  }

  const removeFromCart = (product: ProductProps) => {
    setCart(cart.filter((item) => item._id !== product._id))
    alert('Product removed from cart!')
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}