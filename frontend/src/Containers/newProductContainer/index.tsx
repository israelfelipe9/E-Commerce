import { Button } from '@components/Button'
import Input from '@components/InputV2/Input'
import { IconModal } from '@components/Modal/IconModal'
import { faCircleCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { api }from '@services/api'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newProductShema = zod.object({
  brand: zod.string().min(3).max(50).nonempty().trim(),
  name: zod.string().min(3).max(50).nonempty().trim(),
  description: zod.string().min(3).max(500).nonempty().trim(),
  photo: zod.string().min(3).max(500).nonempty().trim(),
  price: zod.coerce.number().min(0).max(9999999999),
  stock: zod.coerce.number().min(0).max(9999999999),
  sold: zod.coerce.number().min(0).max(9999999999),
  slug: zod.string().min(3).max(50).nonempty().trim(),
})

type NewProductShemaType = zod.infer<typeof newProductShema>

const ViewContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
`

export const NewProductContainer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewProductShemaType>({
    resolver: zodResolver(newProductShema),
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { mutate } = useMutation({
    mutationFn: async (data) => (await api.post('admin/create/products', data)).data,
    onError: (error: AxiosError<{ message: string }>) => setError(error.response?.data.message ?? 'Erro inesperado'),
    onSuccess: () => {
      setSuccess(true)
      reset()
    }
  })
  const handleEdit = (data) => mutate(data)

  return (
    <ViewContainerWrapper>
      {success && <IconModal
        type='success'
        icon={faCircleCheck}
        title='Registro criado com sucesso!'
        closeFunction={() => setSuccess(false)}
        successFunction={() => setSuccess(false)}
      />}
      {error && <IconModal
        type='error'
        icon={faXmarkCircle}
        title='O Registro não foi criado com sucesso!'
        text={error}
        closeFunction={() => setError('')}
        successFunction={() => setError('')}
      />}
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          label='Brand'
          type='text'
          error={errors.brand?.message}
          {...register('brand')}
        />
        <Input
          label='Name'
          type='text'
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label='Description'
          type='text'
          error={errors.description?.message}
          {...register('description')}
        />
        <Input
          label='Photo'
          type='text'
          error={errors.photo?.message}
          {...register('photo')}
        />
        <Input
          label='Price'
          type='number'
          error={errors.price?.message}
          {...register('price')}
        />
        <Input
          label='Stock'
          type='number'
          error={errors.stock?.message}
          {...register('stock')}
        />
        <Input
          label='Sold'
          type='number'
          error={errors.sold?.message}
          {...register('sold')}
        />
        <Input
          label='Slug'
          type='text'
          error={errors.slug?.message}
          {...register('slug')}
        />
        <Button type='submit' label='Submit'/>
      </form>
    </ViewContainerWrapper>
  )
}