import { useMutation } from '@tanstack/react-query'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

interface AuthContextProps {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  error: string
  setError?: React.Dispatch<React.SetStateAction<string>>
  user: {
    id: number
    name: string
    email: string
    admin?: boolean
    role?: number
  }
  handleLogin: (payload: { email: string, password: string }) => void
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  auth: false,
  setAuth: () => null,
  error: '',
  setError: () => null,
  user: {
    id: 0,
    name: '',
    email: ''
  },
  handleLogin: () => null,
  handleLogout: () => null
})

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState<AuthContextProps['user']>({
    id: 0,
    name: '',
    email: ''
  })
  const [error, setError] = useState('')
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (payload) => (await api.post('/login', payload)).data,
    onError: (error: AxiosError) => setError(error.response?.data.message),
    onSuccess: (data) => {
      const token = data.token
      localStorage.setItem('Authorization', token)
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuth(true)
      if (data.user.admin) {
        setUser({
          admin: data.user.admin,
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role
        })
        navigate('/admin')
      } else {
        setUser({
          id: data.user._id,
          name: data.user.name,
          email: data.user.email
        })
        navigate('/home')
      }
    }
  })

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/getUser')
      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email
      })
    }
    const token = localStorage.getItem('Authorization')
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuth(true)
      getUserData()
    }
  }, [])

  const handleLogin = (payload) => mutate(payload)

  const handleLogout = () => {
    localStorage.removeItem('Authorization')
    api.defaults.headers.Authorization = ''
    setAuth(false)
    setUser({
      id: 0,
      name: '',
      email: ''
    })
    navigate('/home')
  }

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      error,
      user,
      handleLogin,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

