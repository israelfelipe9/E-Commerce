import { CartItems } from '../../Containers/CartItems'
import { BaseWrapper } from '../../components/BaseWrapper'

export const CartPage = () => {
  return (
    <BaseWrapper>
      <h1>Cart 🛒</h1>
      <CartItems />
    </BaseWrapper>
  )
}