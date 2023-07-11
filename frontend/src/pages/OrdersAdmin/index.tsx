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
    header: 'User ID',
    accessor: 'userId',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    } 
  },
  {
    header: 'Date',
    accessor: 'date',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    }
  },
  {
    header: 'Products',
    accessor: 'products.name',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    }
  },
  {
    header: 'Total',
    accessor: 'totalPrice',
    type: 'number',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    }
  }
]

export const OrdersAdminPage = () => {
  document.title = 'Ocularis | Orders'

  const { data } = useQuery({
    queryKey: ['getAllOrders'],
    queryFn: async () => {
      const response = (await api.get('/admin/orders')).data
      return response.map((order) => {
        return {
          userId: order.userId,
          date: order.date,
          products: {
            name: order.products.map((product) => product.name).join(', '),
          },
          totalPrice: order.totalPrice,
        }
      })
    },
    refetchOnWindowFocus: true,
  })

  return (
    <BaseWrapper>
      <Title>Orders</Title>
      <PageContainer>
        <Table columns={columns} data={data ?? []} />
      </PageContainer>
    </BaseWrapper>
  )
}
