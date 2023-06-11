import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = zod.object({
  name: zod.string().min(3).max(50).nonempty().trim(),
  email: zod.string().email().min(3).max(50).nonempty().trim(),
  password: zod.string().min(3).max(50).nonempty().trim(),
  confirmPassword: zod.string().min(3).max(50).nonempty().trim(),
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
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema)
  })
  const handleSubmitForm = (payload) => {
    console.log(payload)
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h1>Register</h1>
      <Input
        placeholder="John doe"
        label="Name:"
        error={errors.name?.message}
        {...register('name')}
      />
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
      <Input
        type="password"
        label="Confirm password:"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Input
        type="checkbox"
        label="I agree with the terms and conditions"
      />
      <button>Enviar</button>
    </Form>
  )
}