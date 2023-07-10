import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const registerSchema = zod.object({
  name: zod.string().min(3).max(50).nonempty().trim(),
  email: zod.string().email().min(3).max(50).nonempty().trim(),
  password: zod.string().min(3).max(50).nonempty().trim(),
  confirmPassword: zod.string().min(3).max(50).nonempty().trim(),
  termsAndConditions: zod.boolean().refine((value) => value === true, {
    message: 'You must agree with the terms and conditions',
  }),
})

type RegisterSchemaType = zod.infer<typeof registerSchema>

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const RegisterForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  })

  const [error, setError] = useState('')

  const { mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload: RegisterSchemaType) =>
      (await api.post('/register', payload)).data,
    onError: (error: AxiosError) => setError(error.response?.data.message),
    onSuccess: (data) => {
      alert('User was successfully registered')
      navigate('/login')
    },
  })

  const handleSubmitForm = (payload) => {
    console.log(payload)
    mutate(payload)
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h1>Register</h1>
      <Input
        placeholder='John doe'
        label='Name:'
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        placeholder='john.doe@email.com'
        label='Email:'
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        type='password'
        label='Password:'
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        type='password'
        label='Confirm password:'
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Input
        type='checkbox'
        label='I agree with the terms and conditions'
        error={errors.termsAndConditions?.message}
        {...register('termsAndConditions')}
      />
      <Button type='submit' label='Enviar' />
    </Form>
  )
}
