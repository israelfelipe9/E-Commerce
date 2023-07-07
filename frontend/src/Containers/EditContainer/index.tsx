import { Button } from '@components/Button'
import Input from '@components/InputV2/Input'
import { IconModal } from '@components/Modal/IconModal'
import { faCircleCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { api }from '@services/api'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

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

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.textPrimary};
`

export const EditContainer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const location = useLocation()
  const item = location.state.data
  const columns: TableProps['columns'] = location.state.columns
  const { mutate, isLoading } = useMutation({
    mutationFn: async (data) => {
      const path = location.pathname.split('/')
      const table = path[2]
      const id = path[4]
      return (await api.put(`admin/edit/${table}/${id}`, data)).data
    },
    onError: (error: AxiosError<{ message: string }>) => setError(error.response?.data.message ?? 'Erro inesperado'),
    onSuccess: () => setSuccess(true)
  })
  const handleEdit = (data: any) => mutate(data)


  return (
    <ViewContainerWrapper>
      {success && <IconModal
        type='success'
        icon={faCircleCheck}
        title='Registro editado com sucesso!'
        closeFunction={() => setSuccess(false)}
        successFunction={() => setSuccess(false)}
      />}
      {error && <IconModal
        type='error'
        icon={faXmarkCircle}
        title='O Registro não foi editado com sucesso!'
        text={error}
        closeFunction={() => setError('')}
        successFunction={() => setError('')}
      />}
      <form onSubmit={handleSubmit(handleEdit)}>
        {columns.map((property, index) => {
          if (!property.options?.edit) {
            return null
          }

          if (property.accessor.includes('.')) {
            const accessors = property.accessor.split('.')
            const value = item[accessors[0]][accessors[1]]
            return (
              <DataContainer key={index}>
                <Label>{property.header}</Label>
                <Input type='text' {...register(property.accessor, {
                  value
                })} />
              </DataContainer>
            )
          }

          if (property.accessor === 'id') {
            return (
              <DataContainer key={index}>
                <Label>{property.header}</Label>
                <Input type='number' {...register(property.accessor, {
                  value: item[property.accessor]
                })} />
              </DataContainer>
            )
          }

          if (property.type === 'boolean') {
            return (
              <DataContainer key={index}>
                <Label>{property.header}</Label>
                <Input type='checkbox' {...register(property.accessor, {
                  value: item[property.accessor]
                })} />
              </DataContainer>
            )
          }

          if (property.type === 'image') {
            register('images', { value: item.images })
            return null
          }

          if (property.type === 'date') {
            return (
              <DataContainer key={index}>
                <Label>{property.header}</Label>
                <Input type='date' {...register(property.accessor, {
                  value: new Date(item[property.accessor]).toISOString().slice(0, 10)
                })} />
              </DataContainer>)
          }

          return <DataContainer key={index}>
            <Label>{property.header}</Label>
            <Input type={property.type} {...register(property.accessor, {
              value: item[property.accessor]
            })} />
          </DataContainer>
        }
        )}
        <Button type='submit' label='Enviar' loading={ isLoading } />
      </form>
    </ViewContainerWrapper>
  )
}