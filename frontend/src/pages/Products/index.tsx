import { BaseWrapper } from '@components/BaseWrapper'
import styled from 'styled-components'
import { Table } from '@components/Table'
import { useQuery } from '@tanstack/react-query'
import { api } from '@services/api'
import { Button } from '@components/Button'
import { useNavigate } from 'react-router-dom'

const Title = styled.h1`
  width: fit-content;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 2.5vh;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const columns: TableProps['columns'] = [
  {
    header: 'ID',
    accessor: 'id',
    type: 'number',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Brand',
    accessor: 'brand',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Name',
    accessor: 'name',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Photo',
    accessor: 'photo',
    type: 'image',
    options: {
      table: true,
      view: true,
    },
  },
  {
    header: 'Price',
    accessor: 'price',
    type: 'number',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Stock',
    accessor: 'qtInStock',
    type: 'number',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Sold',
    accessor: 'qtSold',
    type: 'number',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
  {
    header: 'Slug',
    accessor: 'slug',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    },
  },
]

export const ProductsPage = () => {
  document.title = 'Ocularis | Products'
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['getAllProducts'],
    queryFn: async () => {
      const response = (await api.get('/products')).data
      return response.map((product) => {
        return {
          id: product.id,
          brand: product.brand,
          name: product.name,
          photo: product.photo[0],
          price: product.price,
          qtInStock: product.qtInStock,
          qtSold: product.qtSold,
          slug: product.slug,
        }
      })
    },
    refetchOnWindowFocus: false,
  })

  return (
    <BaseWrapper>
      <Title>Products</Title>
      <PageContainer>
        <Button
          type='button'
          label='New Product'
          width='fit-content'
          onClick={() => navigate('/admin/products/new')}
        />
        <Table columns={columns} data={data ?? []} />
      </PageContainer>
    </BaseWrapper>
  )
}
