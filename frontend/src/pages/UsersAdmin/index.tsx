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
    header: 'Name',
    accessor: 'name',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    }
  },
  {
    header: 'Email',
    accessor: 'email',
    type: 'string',
    options: {
      table: true,
      filter: true,
      view: true,
      edit: true,
    }
  }
]

export const UsersAdminPage = () => {
  document.title = 'Ocularis | Users'

  const { data } = useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => {
      const response = (await api.get('/admin/users')).data
      return response.map((user) => {
        return {
          userId: user._id,
          name: user.name,
          email: user.email
        }
      })
    },
    refetchOnWindowFocus: true,
  })

  return (
    <BaseWrapper>
      <Title>Users</Title>
      <PageContainer>
        <Table columns={columns} data={data ?? []} />
      </PageContainer>
    </BaseWrapper>
  )
}
