import { useEffect, useState, useContext } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'

export const UserOrders = () => {
  const [data, setData] = useState()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function getUserData() {
      if (user.admin) {
        const { data } = await api.get('/admin/orders')
        setData(data)
      } else {
        const { data } = await api.get(`/getOrder/${user.id}`)
        setData(data)
      }
    }
    getUserData()
  }, [])

  if (!data || data.length === 0) {
    return <h1>No Orders!</h1>
  }

  return (
    <BaseWrapper>
      {data && (
        <>
          {user.admin && <h1>All Users Orders</h1>}
          {!user.admin && <h1>{user.name} Orders</h1>}
          <table className='table'>
            <thead>
              <tr>
                {/* <th>Client ID</th>
                <th>Item ID</th> */}
                {user.admin && <th>Client ID</th>}
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  {/* <td>{order.IdClient}</td>
                  <td>{order.IdItem}</td> */}
                  {user.admin && <th>{order.IdClient}</th>}
                  <td>{order.date}</td>
                  <td>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      maximumFractionDigits: 2,
                    }).format(order.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </BaseWrapper>
  )
}
