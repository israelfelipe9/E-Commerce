import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const recommendSchema = zod.object({
  brand: zod.string().min(0).max(50).nonempty().trim(),
  format: zod.string().min(3).max(50).nonempty().trim(),
  color: zod.string().min(3).max(50).nonempty().trim(),
})

type RecommendSchemaType = zod.infer<typeof recommendSchema>;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const RecommendForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecommendSchemaType>({
    resolver: zodResolver(recommendSchema),
  })
  const handleSubmitForm = (payload) => {
    console.log(payload)
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h1>Recommendation</h1>
      <Input
        placeholder="Ray-Ban"
        label="Brand:"
        error={errors.brand?.message}
        {...register('brand')}
      />
      <Input
        placeholder="Circular"
        label="Format:"
        error={errors.format?.message}
        {...register('format')}
      />
      <Input
        placeholder="Black"
        label="Color:"
        error={errors.color?.message}
        {...register('color')}
      />
      <button>Recommend</button>
    </Form>
  )
}
