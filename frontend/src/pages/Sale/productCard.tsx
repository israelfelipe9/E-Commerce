import './productStyle.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext, type ProductProps } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Button } from '../../components/common/button'

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className='col-md-4 mt-3 mb-3'>
      <div className='card border'>
        <div className='card-body'>
          <div className='card-img-actions'>
            <Link to={`/ocularis/sale/${product.id}`}>
              <img
                src={product.photo[0]}
                className='img-card'
                width='140'
                height='150'
                alt=''
              />
            </Link>
          </div>
        </div>
        <div className='card-body bg-light text-center'>
          <div className='mb-2'>
            <h5 className='font-weight-semibold mb-2'>
              <Link to={`/ocularis/sale/${product.id}`}>{product.name}</Link>
            </h5>

            <a href='#' className='text-muted' data-abc='true'>
              Sunglasses
            </a>
          </div>

          <h3 className='mb-0 font-weight-semibold'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            }).format(product.price)}
          </h3>

          <Button
            type='button'
            className='btn btn-sm mt-2'
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faCartShopping} fixedWidth />
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
