import { useContext, useEffect, useRef, useState } from 'react'
import { CartContext, ProductProps } from '../../contexts/CartContext'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { api } from 'src/services/api'
import { set } from 'react-hook-form'
import { AuthContext } from '@contexts/AuthContext'

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
  width: 400px;
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
  text-transform: capitalize;
  text-align: left;
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
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;

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
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffc94b;
    opacity: 0.8;
  }
`

const CartItem = ({ item, updateTotalPrice, removeFromCart }: { item: ProductProps, updateTotalPrice: () => void, removeFromCart: (item: ProductProps) => void }) => {
  const [amount, setAmount] = useState(item.qtdCart)

  useEffect(() => {
    updateTotalPrice()
  }, [amount])
  
  return (
    <Item>
      <ItemDetailsContainer>
        <ItemImg src={item.photo[0]} />
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            }).format(item.price)}
          </ItemPrice>
        </ItemDetails>
      </ItemDetailsContainer>
      <ItemQuantity>
        <MinusButton
          onClick={() => {
            if (amount > 1) {
              item.qtdCart = item.qtdCart - 1
              setAmount(item.qtdCart)
            }
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </MinusButton>
        {item.qtdCart}
        <PlusButton
          onClick={() => {
            item.qtdCart = item.qtdCart + 1
            setAmount(item.qtdCart)
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </ItemQuantity>
      <RemoveItemButton onClick={() => removeFromCart(item)}>
        Remover
      </RemoveItemButton>
    </Item>
  )
}

export const CartItems = () => {
  const { cart, removeFromCart, setCart } = useContext(CartContext)
  const { auth } = useContext(AuthContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()

  const handleFinish = async () => {
    console.log(cart, totalPrice)
    if (auth) {
      try {
        const data = cart.map((item) => {
          return {
            productId: item._id,
            quantity: item.qtdCart,
            name: item.name
          }
        })
        const res = await api.post('/order', {
          products: data,
          totalPrice,
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      
      setCart([])
      navigate('/payment')
    } else {
      navigate('/login')
    }
  }

  const updateTotalPrice = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.qtdCart
    })
    setTotalPrice(total)
  }

  return (
    <Container>
      {cart.length === 0 && <h3>Empty Cart</h3>}
      {cart.map((item) => <CartItem item={item} updateTotalPrice={updateTotalPrice} removeFromCart={() => removeFromCart(item)} key={item.name} />)}
      <TotalPriceContainer>
        <h3>Total:</h3>
        <h3>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2,
          }).format(totalPrice)}
        </h3>
        <CloseCartButton onClick={handleFinish}>Finish</CloseCartButton>
      </TotalPriceContainer>
    </Container>
  )
}
