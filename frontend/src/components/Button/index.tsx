import styled from 'styled-components'

interface ButtonProps {
  width?: string
  label: string
}

const ButtonContainer = styled.button<ButtonProps>`
  background-color: #f74a2c;
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
    background-color: #fc7a63;
  }
`

export const Button = ({ label, width }: ButtonProps) => {
  return (
    <ButtonContainer
      type="button"
      width={width}
    >
      {label}
    </ButtonContainer>
  )
}