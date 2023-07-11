import styled from 'styled-components'

interface ButtonProps {
  width?: string
  label: string
  type: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const ButtonContainer = styled.button<ButtonProps>`
  background-color: #EFA602;
  color: #fff;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width || 'auto'};

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffd571;
  }
`

export const Button = ({ label, width, type, onClick, disabled }: ButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </ButtonContainer>
  )
}