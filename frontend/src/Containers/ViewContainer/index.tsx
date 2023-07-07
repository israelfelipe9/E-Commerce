import { ImageDisplay } from '@components/Table/Displays/Image'
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

const Data = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

export const ViewContainer = () => {
  const location = useLocation()
  const item = location.state.data
  const columns: TableProps['columns'] = location.state.columns

  return (
    <ViewContainerWrapper>
      {columns.map((property, index) => {
        if (!property.options?.view) {
          return null
        }

        if (property.type === 'image') return (
          <DataContainer key={index}>
            <Label>{property.header}</Label>
            <ImageDisplay src={item[property.accessor]} />
          </DataContainer>
        )

        if (property.accessor.includes('.')) {
          const accessors = property.accessor.split('.')
          const value = item[accessors[0]][accessors[1]]
          return <DataContainer key={index}>
            <Label>{property.header}</Label>
            <Data>{value}</Data>
          </DataContainer>
        }
        
        if (property.accessor === 'id') return null

        return <DataContainer key={index}>
          <Label>{property.header}</Label>
          <Data>{item[property.accessor]}</Data>
        </DataContainer>
      }
      )}
    </ViewContainerWrapper>
  )
}