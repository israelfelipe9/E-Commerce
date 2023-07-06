import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  padding: 50px 13%;
  font-family: sans-serif;
  text-align: center;
`

export const BaseWrapper = ({ children }) => {
  return <Container>{children}</Container>
}
