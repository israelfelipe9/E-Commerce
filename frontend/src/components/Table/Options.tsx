import styled from 'styled-components'
import { faEllipsis, faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { View } from './Options/View'
import { Edit } from './Options/Edit'
import { Delete } from './Options/Delete'

interface OptionsProps {
  item: {
    id: number
  }
  columns: TableProps['columns']
}

const OptionsContainer = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: 100ms ease-in-out;
  position: relative;

  &:hover {
    transition: 100ms ease-in-out;
    background-color: ${props => props.theme.colors.primaryLightest};
  }
`

const OptionsItems = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: fit-content;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  overflow: hidden;
`

const OptionsItem = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    transition: 100ms ease-in-out;
    background-color: ${props => props.theme.colors.primaryLightest};
  }
`


export const Options = ({ item, columns }: OptionsProps) => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <OptionsContainer >
      <FontAwesomeIcon icon={faEllipsis} onClick={() => setShowOptions(!showOptions)}/>
      {showOptions && <OptionsItems>
        <View item={item} columns={columns} />
        <Edit item={item} columns={columns} />
        <Delete item={item} columns={columns} />
      </OptionsItems>}
    </OptionsContainer>
  )
}