import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  position: relative;
`

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: #292929;
`

const ItemPrice = styled.p`
  font-weight: 500;
  margin: 0;
`

const ItemQuantity = styled.p`
  font-weight: 500;
  margin: 0;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

const RemoveItemButton = styled.button`
  border: none;
  background-color: #f74a2c;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #f74a2c;
    opacity: 0.8;
  }
`

const MinusButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
  }
`

const PlusButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
  }
`

const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  position: relative;
`

const CloseCartButton = styled.button`
  border: none;
  background-color: #ffbc20;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffc94b;
    opacity: 0.8;
  }
`

export const CartItems = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext)
  const [amount, setAmount] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (cart.length > 0) {
      cart.reduce((acc, item) => {
        return acc + item.price * item.amount
      }, 0)
    }
  }, [amount, cart])

  const handleFinish = () => {
    // Create an order

    navigate('/payment')
  }

  return (
    <Container>
      {cart.length === 0 && <h3>Empty Cart</h3>}
      {cart.map((item) => (
        <Item>
          <ItemDetailsContainer>
            <ItemImg src={item.photo[0].url} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>R${item.price},00</ItemPrice>
            </ItemDetails>
          </ItemDetailsContainer>
          <ItemQuantity>
            <MinusButton
              onClick={() => {
                if (amount > 1) {
                  setAmount(amount - 1)
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </MinusButton>
            {item.amount}
            <PlusButton
              onClick={() => {
                setAmount(amount + 1)
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </PlusButton>
          </ItemQuantity>
          <RemoveItemButton onClick={() => removeFromCart(item)}>
            Remover
          </RemoveItemButton>
        </Item>
      ))}
      <TotalPriceContainer>
        <h3>Total:</h3>
        <h3>R${totalPrice},00</h3>
        <CloseCartButton onClick={handleFinish}>Finish</CloseCartButton>
      </TotalPriceContainer>
    </Container>
  )
}
