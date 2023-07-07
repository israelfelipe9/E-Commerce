import styled from 'styled-components'
import { forwardRef } from 'react'

export interface InputProps {
  name?: string
  label: string
  error: string | undefined
  placeholder?: string
  type: 'password' | 'text' | 'date' | 'number' | 'search'
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CustomInput = styled('textarea')<{error: string}>`
  resize: none;
  background-color: #E1E1E1;
  border: none;
  border-radius: 4px;
  width: 100%;
  min-height: 100px;
  max-height: 200px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-bottom: ${props => props.error === undefined ? '15px' : '5px'};
  font-size: 16px;
  font-family: "DIN Pro", sans-serif;
  transition: ease-in 100ms;
  box-sizing: border-box;
  padding: 8px;
  outline: ${props => props.error !== undefined ? '2px #E7517E solid' : 'none'};
  color: ${props => props.theme.textInput};

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

const TextBox = forwardRef((props: InputProps, ref) => {
  return (
    <InputContainer>
      <Label name={props.name}>{props.label}</Label>
      <CustomInput {...props} ref={ref}/>
      {props.error ? <Error>{ props.error }</Error> : null}
    </InputContainer>
  )
})

TextBox.displayName = 'TextBox'

export default TextBox