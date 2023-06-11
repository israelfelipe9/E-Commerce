import styled from 'styled-components'
import cartImg from '../../assets/carrinho.png'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { CartContext } from '../../contexts/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 5px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #EFA602;
  }
`

const ItemsNumber = styled.span`
  background-color: #f74a2c;
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.8rem;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  height: 1.5rem;
`

const CartDetails = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  min-height: 100px;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  cursor: default;
  z-index: 1;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  position: relative;
`

const ItemImg = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 6px;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const ItemName = styled.p`
  font-weight: 700;
  margin: 0;
  color: #292929;
`

const ItemPrice = styled.p`
  font-weight: 700;
  margin: 0;
`

const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: -12px;
  right: -6px;
  font-size: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f74a2c;
  }
`

export const Cart = () => {
  const [showItems, setShowItems] = useState(false)
  const [isEmpity, setIsEmpity] = useState(true)
  const { cart, removeFromCart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (cart.length === 0) {
      setIsEmpity(true)
    } else {
      setIsEmpity(false)
    }
  }, [cart])

  return (
    <CartContainer onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
      <ItemsNumber>{ cart.length }</ItemsNumber>
      <Icon src={cartImg} />
      {showItems && <CartDetails>
        <h3>Cart</h3>
        {cart.length !== 0 && cart.map(item => (
          <Item>
            <RemoveItemButton onClick={() => removeFromCart(item)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </RemoveItemButton>
            <ItemImg src={item.photo[0].url} alt="image of a glasses" />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>R${item.price},00</ItemPrice>
            </ItemDetails>
          </Item>
        ))}
        {isEmpity ? <p>Your cart is empity!</p> : <Button label='Ir para o carrinho' width={'100%'} onClick={() => navigate('/cart')}/>}
      </CartDetails>}
    </CartContainer>
  )
}