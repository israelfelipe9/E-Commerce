import { Button } from '@components/Button'
import Input from '@components/InputV2/Input'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

interface FilterDialogProps {
  fields: TableProps['columns']
  onCloseFunction: () => void
  filterFn: any
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 500px;
  min-height: 300px;
  max-height: 600px;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  overflow: auto;
`

const Close = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  &:hover {
    background-color: #f5f5f5;
  }
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: left;
`

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.textPrimary};
`

export const FilterDialog = ({ fields, onCloseFunction, filterFn }: FilterDialogProps) => {
  const { register, handleSubmit } = useForm()
  const handleFilter = (data: any) => {
    const columnFilters = fields.map(field => {
      if (field.accessor.includes('.')) {
        const [first, second] = field.accessor.split('.')
        if (data[first][second] !== '') {
          return {
            id: field.accessor,
            value: data[first][second]
          }
        }
      }
      
      
      if (data[field.accessor] !== '') {
        return {
          id: field.accessor,
          value: data[field.accessor]
        }
      } else {
        return null
      }
    })
    
    filterFn(columnFilters.filter((filter: any) => filter?.value !== undefined))
  }

  return (
    <Background>
      <Container>
        <Close onClick={() => onCloseFunction()}>
          <FontAwesomeIcon icon={faTimes} />
        </Close>
        <h1>Filtro</h1>
        <form onSubmit={handleSubmit(handleFilter)}>
          {fields.map(field => {
            if (!field.options?.filter) {
              register(field.accessor, { required: false, value: '' })
              return null
            }

            return (
              <DataContainer key={field.header}>
                <Label>{field.header}</Label>
                <Input type={field.type} {...register(field.accessor)} />
              </DataContainer>
            )
          })}
          <Button type='submit' label='Filtrar'/>
        </form>
      </Container>
    </Background>
  )
}