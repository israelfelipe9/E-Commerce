import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  padding: 30px 25%;
`

export const BaseWrapper = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}