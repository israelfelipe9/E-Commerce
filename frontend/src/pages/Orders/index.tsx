import { useEffect, useState, useContext } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { useQuery } from '@tanstack/react-query'

export const UserOrders = () => {
  const { user } = useContext(AuthContext)
  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => (await api.get('/order')).data
  })

  return (
    <BaseWrapper>
      {data && (
        <>
          <h1>{user.name} Orders</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Products</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <th>{order.userId}</th>
                  <td>
                    <ul style={{listStyle: 'none'}}>
                      {order.products.map((product) => (
                        <li key={product._id}>
                          {product.name} - {product.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      maximumFractionDigits: 2,
                    }).format(order.totalPrice)}
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
