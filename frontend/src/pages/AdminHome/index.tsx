import { useEffect, useState } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

export const AdminHomePage = () => {
  const [data, setData] = useState()

  const handleDelete = async (id: number) => {
    const originalData = data

    const newData = originalData.filter((item) => item.id !== id)
    setData(newData)

    try {
      await api.delete('/admin/products/' + id.toString())
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log('This product has already been deleted')
      setData(originalData)
    }
  }

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/products')
      setData(data)
    }
    getUserData()
  }, [])

  return (
    <BaseWrapper>
      <h1>Products</h1>
    </BaseWrapper>
  )
}
