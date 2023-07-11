import { createContext, useState } from 'react'

export interface ProductProps {
  _id: string
  name: string
  description: string
  price: number
  qtInStock: number
  qtSold: number
  slug: string
  photo?: string[]
  qtdCart: number
}

interface CartContextProps {
  cart: Array<ProductProps>
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductProps[]>([])

  const addToCart = (product: ProductProps) => {
    const item = cart.find((item) => item._id === product._id)

    if (item) {
      item.qtdCart = item.qtdCart + product.qtdCart
      setCart([...cart])
      alert('Product added to cart!')
      return
    } else {
      setCart([...cart, product])
    }

    console.log([...cart, product])
    alert('Product added to cart!')
  }

  const removeFromCart = (product: ProductProps) => {
    setCart(cart.filter((item) => item._id !== product._id))
    alert('Product removed from cart!')
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
