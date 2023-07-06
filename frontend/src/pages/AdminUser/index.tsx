import { useEffect, useState } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

export const AdminUsersPage = () => {
  const [data, setData] = useState()

  const handleDelete = async (id: number) => {
    const originalData = data
    const newData = originalData.filter((item) => item.id !== id)
    setData(newData)
    try {
      await api.delete('/admin/users/' + id.toString())
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log('This user has already been deleted')
      setData(originalData)
    }
  }

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/admin/users')
      setData(data)
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
              <th scope='col' key='delete'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope='row' key={item.id.toString() + 'id'}>
                  {item.id}
                </th>
                <td key={item.id.toString() + 'name'}>{item.name}</td>
                <td key={item.id.toString() + 'email'}>{item.email}</td>
                <td key={item.id.toString() + 'role'}>{item.role}</td>
                <td key={item.id.toString() + 'delete'}>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </BaseWrapper>
  )
}
