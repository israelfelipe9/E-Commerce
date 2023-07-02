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
  const [user, setUser] = useState({
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
      setUser({
        id: data.user._id,
        name: data.user.name,
        email: data.user.email
      })
      console.log('Login success')
      console.log(data)
      navigate('/home')
    }
  })

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/user')
      setUser({
        id: data.id,
        name: data.name,
        email: data.email
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

