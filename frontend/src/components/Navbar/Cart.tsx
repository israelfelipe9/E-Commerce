import styled from "styled-components"
import cart from '../../assets/carrinho.png'
import { useState } from 'react'
import { Button } from "../Button"

interface ItemProps {
  imageUrl: string
  name: string
  price: number
}

interface CartProps {
  items: ItemProps[]
}

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
  cursor: pointer;
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

export const Cart = ({ items }: CartProps) => {
  const [showItems, setShowItems] = useState(false)
  const [isEmpity, setIsEmpity] = useState(true)

  return (
    <CartContainer onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
      <ItemsNumber>0</ItemsNumber>
      <Icon src={cart} />
      {showItems && <CartDetails>
        <h3>Cart</h3>
        {items && items.map(item => (
          <Item>
            <ItemImg src={item.imageUrl} alt="image of a glasses" />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>R${item.price},00</ItemPrice>
            </ItemDetails>
          </Item>
        ))}
        {isEmpity ? <p>Your cart is empity!</p> : <Button label='Ir para o carrinho' width={'100%'}/>}
      </CartDetails>}
    </CartContainer>
  )
}