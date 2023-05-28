import styled from "styled-components"
import banner from '../../assets/Background.png'

const Banner = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`

export const Home = () => {
  return (
    <div>
      <Banner src={banner} />
    </div>
  )
}