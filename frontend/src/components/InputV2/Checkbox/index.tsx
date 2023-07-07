import styled from 'styled-components'
import { forwardRef } from 'react'

export interface CheckboxProps {
  name?: string
  label: string
  error: string | undefined
  placeholder?: string
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CustomInput = styled.input`
  background-color: #E1E1E1;
  border: none;
  border-radius: 4px;
  width: ${props => props.type === 'checkbox' ? '20px' : '100%'};
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-bottom: ${props => props.error === undefined ? '15px' : '5px'};
  font-size: 16px;
  font-family: "DIN Pro", sans-serif;
  transition: ease-in 100ms;
  box-sizing: border-box;
  padding: 4px 8px;
  outline: ${props => props.error !== undefined ? '2px #E7517E solid' : 'none'};
  color: black;

  &:hover {
    background-color: #C7C7C7;
    transition: ease-in 100ms;
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    transition: ease-in 100ms;
  }

  &:focus-visible {
    outline: 0;
  }
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`

const Error = styled.span`
  color: #E7517E;
  font-size: 14px;
  margin-bottom: 20px;
`

export const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  return (
    <InputContainer>
      <Label name={props.name}>{props.label}</Label>
      <CustomInput {...props} type='checkbox' ref={ref}/>
      {props.error ? <Error>{ props.error }</Error> : null}
    </InputContainer>
  )
})

Checkbox.displayName = 'Checkbox'