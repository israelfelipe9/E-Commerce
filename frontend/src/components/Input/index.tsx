import { forwardRef } from 'react'
import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
  error?: string | undefined
}

const CustomInput = styled('input')<InputProps>`
  border: 1px solid #ccc;
  border: 1px solid ${({ error }) => error ? 'red' : '#ccc'};
  border-radius: 6px;
  padding: 4px 8px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Error = styled.span`
  color: red;
  font-size: 12px;
`

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <Label>
      {props.label}
      <CustomInput
        error={props.error}
        ref={ref}
        {...props}
      />
      {props.error && <Error>{props.error}</Error>}
    </Label>
  )
})