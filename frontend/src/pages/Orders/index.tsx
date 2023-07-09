import { useEffect, useState, useContext } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'

export const UserOrders = () => {
  const [data, setData] = useState()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get(`/getOrder/${user.id}`)
      setData(data)
    }
    getUserData()
  }, [])

  return (
    <BaseWrapper>
      {!data && <h1>No Orders!</h1>}
      {data && (
        <>
          <h1>User Orders</h1>
          <table className='table'>
            <thead>
              <tr>
                {/* <th>Client ID</th>
                <th>Item ID</th> */}
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order.id}>
                  {/* <td>{order.IdClient}</td>
                  <td>{order.IdItem}</td> */}
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
