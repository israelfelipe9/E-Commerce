import { useEffect, useState } from 'react'
import { ProductCard } from './productCard'
import { api } from '../../services/api'

import * as services from '../../data/fakeProductService'

interface IProducts {
  id: number
  name: string
  description: string
  price: number
  qtInStcock: number
  qtSold: number
  slug: string
  photo?: string[]
}

export const Sale = () => {
  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/products')
      setProducts(data)
    }
    getData()
  }, [])

  return (
    <div className='container d-flex justify-content-center mt-50 mb-50'>
      <div className='row'>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  )
}
