import { AuthContext } from '@contexts/AuthContext'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
  const { auth } = useContext(AuthContext)

  return auth ? <Outlet /> : <Navigate to={'/home'}/>
}