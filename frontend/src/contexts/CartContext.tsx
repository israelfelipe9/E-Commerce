import { createContext, useState } from 'react'

export interface ProductProps {
  _id: string
  name: string
  description: string
  price: number
  qtInStcock: number
  qtSold: number
  slug: string
  photo?: string[]
}
// export interface ProductProps {
//   _id: number
//   name: string
//   brand: string
//   price: number
//   photo: {
//     url: string
//   }[]
//   description: string
//   qtInStock: number
//   qtSold: number
//   amount: number
// }

interface CartContextProps {
  cart: Array<ProductProps>
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
  totalPrice: number
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  totalPrice: 0,
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductProps[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (product: ProductProps) => {
    setTotalPrice(totalPrice + product.price)
    setCart([...cart, product])
    alert('Product added to cart!')
  }

  const removeFromCart = (product: ProductProps) => {
    setTotalPrice(totalPrice - product.price)
    setCart(cart.filter((item) => item._id !== product._id))
    alert('Product removed from cart!')
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
