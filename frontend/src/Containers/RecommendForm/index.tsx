import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as services from '../../data/fakeProductService'

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

  const [data, setData] = useState<services.IProducts>()

  const handleSubmitForm = (payload) => {
    console.log(payload)
    setData(services.getMovie(1))
  }

  return (
    <Wrapper>
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
      {data && (
        <div className="container">
          <hr />
          <h1>{data.name}</h1>
          <h2>{data.brand}</h2>
          <p>{data.description}</p>
          <img src={data.photo[0].url} alt={data.name} />
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            <Link to={`/sale/${data._id}`}>View Product</Link>
          </button>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    button {
      margin-bottom: 50px;
      display: inline-block;
      background-color: aliceblue;
    }
  }
`
