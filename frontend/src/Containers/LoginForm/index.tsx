import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = zod.object({
  email: zod.string().email().min(3).max(50).nonempty().trim(),
  password: zod.string().min(3).max(50).nonempty().trim(),
})

type LoginSchemaType = zod.infer<typeof loginSchema>

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const LoginForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  })
  const handleSubmitForm = (payload) => {
    console.log(payload)
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h1>Login</h1>
      <Input
        placeholder="john.doe@email.com"
        label="Email:"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        type="password"
        label="Password:"
        error={errors.password?.message}
        {...register('password')}
      />
      <button>Enviar</button>
    </Form>
  )
}