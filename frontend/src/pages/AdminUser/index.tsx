import { useEffect, useState } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

export const AdminUsersPage = () => {
  const [data, setData] = useState()

  const handleDelete = async (id: string) => {
    const originalData = data
    const newData = originalData.filter((item) => item._id !== id)
    setData(newData)
    try {
      await api.delete(`/admin/users/${id}`)
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
              <th scope='col' key='delete'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <th scope='row' key={item._id.toString() + 'id'}>
                  {item._id}
                </th>
                <td key={item._id.toString() + 'name'}>{item.name}</td>
                <td key={item._id.toString() + 'email'}>{item.email}</td>
                <td key={item._id.toString() + 'delete'}>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(item._id)}
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
