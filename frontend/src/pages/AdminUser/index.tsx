import { useEffect, useState } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

export const AdminUsersPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/getUser')
      setData(data.user)
    }
    getUserData()
  }, [])

  return (
    <BaseWrapper>
      <h1>Users</h1>
      {data && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' key='id'>
                Id
              </th>
              <th scope='col' key='name'>
                Name
              </th>
              <th scope='col' key='email'>
                Email
              </th>
              <th scope='col' key='role'>
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key={data.id}>
              <th scope='row' key={data.id.toString() + 'id'}>
                {data.id}
              </th>
              <td key={data.id.toString() + 'name'}>{data.name}</td>
              <td key={data.id.toString() + 'email'}>{data.email}</td>
              <td key={data.id.toString() + 'role'}>{data.role}</td>
            </tr>
          </tbody>
        </table>
      )}
    </BaseWrapper>
  )
}
