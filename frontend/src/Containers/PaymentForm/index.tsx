import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const paymentSchema = zod.object({
  name: zod.string().max(50).nonempty().trim(),
  cpf: zod.string().length(11).nonempty().trim(),
  cardNumber: zod.string().min(13).max(16).nonempty().trim(),
  validity: zod.date(),
  cvv: zod.number().gte(100).lte(999),
})

type PaymentSchemaType = zod.infer<typeof paymentSchema>;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentSchemaType>({
    resolver: zodResolver(paymentSchema),
  })
  const handleSubmitForm = (payload) => {
    console.log(payload)
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h1>Payment</h1>
      <Input
        placeholder="John doe"
        label="Name:"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        placeholder="9999999999"
        label="CPF:"
        error={errors.cpf?.message}
        {...register('cpf')}
      />
      <Input
        placeholder="9999999999999"
        label="Card Number:"
        error={errors.cardNumber?.message}
        {...register('cardNumber')}
      />
      <Input
        type="date"
        label="Validity:"
        error={errors.validity?.message}
        {...register('validity')}
      />
      <Input
        placeholder="999"
        label="CVV:"
        error={errors.cvv?.message}
        {...register('cvv')}
      />
      <button>Enviar</button>
    </Form>
  )
}
