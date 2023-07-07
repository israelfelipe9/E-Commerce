import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Outlet } from 'react-router-dom'

export const Container = styled.div`
  margin-top: 60px;
  padding: 80px 60px;
  background: radial-gradient(circle, #9381FF 20%, rgba(112,71,247,1) 100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`

export const Footer = () => {


  return (
    <>
      <Outlet />
        <Container>
            <Wrapper>
              <Row>
                <Column>
                <Title>About Us</Title>
                    <Link href="#">Story</Link>
                    <Link href="#">Privacy & Security</Link>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Terms of Use</Link>
                </Column>
                <Column>
                <Title>Support</Title>
                    <Link href="#">Faq</Link>
                    <Link href="#">Live chat</Link>
                    <Link href="#">Contact us</Link>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <Link href="#">Customer service</Link>
                    <Link href="#">Help Center</Link>
                    <Link href="#">Accessibility</Link>
                </Column>
                <Column>
                    <Title>Social</Title>
                    <Link href="#"><FontAwesomeIcon icon={faFacebook} size="xl"/> Facebook</Link>
                    <Link href="#"><FontAwesomeIcon icon={faInstagram} size="xl"/> Instagram </Link>
                    <Link href="#"><FontAwesomeIcon icon={faYoutube} size="xl"/> Youtube </Link>
                    <Link href="#"><FontAwesomeIcon icon={faTwitter} size="xl"/> Twitter </Link>
                </Column>
              </Row>
          </Wrapper>
        </Container>
      </>
    )
}
