import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { Container } from '../../styles/Container'
import { Button } from '../../components/common/button'
import CartAmountToggle from './cartAmount'
import MyImage from './myImage'

import * as services from '../../data/fakeProductService'
import { CartContext } from '../../contexts/CartContext'

export const Product = () => {
  const [data, setData] = useState<services.IProducts | undefined>()
  const [amount, setAmount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  const setIncrease = () => {
    amount < data.qtInStock ? setAmount(amount + 1) : setAmount(data.qtInStock)
  }

  const { id } = useParams()

  useEffect(() => {
    // Put this inside a try catch block when connection is established with backend
    setData(services.getMovie(Number(id)))
  }, [])

  if (!data) {
    return <div className='page_loading'>Not Found</div>
  }

  return (
    <Wrapper>
      <Container className='container'>
        <div className='grid grid-two-column'>
          {/* product Images  */}
          <div className='product_images'>
            <MyImage imgs={data.photo} />
            {/* product dAta  */}
            <div className='product-data'>
              <h2>{data.name}</h2>

              <h3 className='product-data-price product-data-real-price'>
                Price:{' '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2,
                }).format(data.price)}
              </h3>
              <p>{data.description}</p>
              <div className='product-data-info'>
                <h5>
                  Available:
                  <span>
                    {' '}
                    {data.qtInStock > 0
                      ? data.qtInStock + ' units in stock'
                      : 'Not Available'}
                  </span>
                </h5>
                <h5>
                  Brand :<span> {data.brand} </span>
                </h5>
                <hr />
                {data.qtInStock > 0 && (
                  <>
                    <CartAmountToggle
                      amount={amount}
                      setDecrease={setDecrease}
                      setIncrease={setIncrease}
                    />
                    <Button className='btn' onClick={() => addToCart(data)}>
                      Add To Cart
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 100px;
    gap: 2rem;
  }

  .product-data-price {
    font-weight: bold;
  }
  .product-data-real-price {
    color: ${({ theme }) => theme.colors.btn};
  }
  .product-data-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.8rem;

    span {
      font-weight: bold;
    }
  }

  hr {
    max-width: 100%;
    width: 100%;
    border: 0.1rem solid #000;
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #e2e2e2;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  @media (max-width: 800px) {
    padding: 0 2.4rem;
  }
`
