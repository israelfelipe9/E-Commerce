import { useEffect, useState } from 'react'
import { ProductCard } from './productCard'
import { SearchBox } from '../../components/common/searchBox'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

interface IProducts {
  _id: string
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
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/products')
      setProducts(data)
    }
    getData()
  }, [])

  const handleSearch = (searchValue) => {
    setQuery(searchValue)
    if (query !== '') {
      const filteredData = products.filter((item) => {
        return Object.values(item.name)
          .join('')
          .toLowerCase()
          .includes(query.toLowerCase())
      })
      setFilteredProducts(filteredData)
    } else {
      setFilteredProducts(products)
    }
  }

  return (
    <BaseWrapper>
      <SearchBox value={query} onChange={handleSearch} />
      <div className='container d-flex justify-content-center mt-50 mb-50'>
        <div className='row'>
          {query.length > 1
            ? filteredProducts.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))
            : products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
        </div>
      </div>
    </BaseWrapper>
  )
}
