import { CartItems } from '../../Containers/CartItems'
import { BaseWrapper } from '../../components/BaseWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartPage = () => {
  return (
    <BaseWrapper>
      <h1>Cart <FontAwesomeIcon icon={faCartShopping} size="xl"/></h1>
      <CartItems />
    </BaseWrapper>
  )
}