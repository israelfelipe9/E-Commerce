import { useEffect, useState } from 'react'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AxiosError } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

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

const Error = styled.div`
  background-color: red;
  width: 100%;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

const ErrorMessage = styled.span`
  color: white;
`

export const UserProfile = () => {
  // const [error, setError] = useState('')
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<LoginSchemaType>({
  //     resolver: zodResolver(loginSchema),
  //   })

  //   const { handleLogin, error } = useContext(AuthContext)

  //   useEffect(() => {
  //     try {
  //       const userId = params.id
  //       if (userId === 'new') return
  //       const data = await getMovie(movieId)
  //       setData({ data })
  //     } catch (ex) {
  //       if (ex.response && ex.response.status === 404)
  //         this.props.history.replace('/not-found')
  //     }
  //   })

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      {error && (
        <Error>
          <FontAwesomeIcon icon={faWarning} color='white' />
          <ErrorMessage>{error}</ErrorMessage>
        </Error>
      )}
      <h1>Profile</h1>
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

      <Button type='submit' label='Enviar' />
    </Form>
  )
}
