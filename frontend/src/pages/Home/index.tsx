import styled from 'styled-components'
import banner from '../../assets/Background.png'
import imge from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/button'

const Banner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const Main = styled.main`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.25rem; /* 4px */
  padding-bottom: 0.25rem; /* 4px */
  margin-bottom: 1.25rem; /* 20px */
`

const Section = styled.section`
  max-width: 36rem;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
  }
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`

const H1 = styled.h1`
  font-size: 3.75rem;
  line-height: 1;
  margin-left: 10%;

  @media (min-width: 640px) {
    font-size: 4.5rem;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
    line-height: 1;
  }

  font-weight: 600;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
`

const P = styled.p`
  margin-left: 10%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #4b5563;
`

const Section2 = styled.section`
  display: flex;
  align-items: center;
  margin-left: 10%;
`

const Section3 = styled.section`
  display: none;

  width: 50%;

  @media (min-width: 1024px) {
    display: flex;
  }

  justify-content: flex-end;
`

const IMG = styled.img`
  width: 66.666667%;
  margin-right: 10%;
  height: 100%;
`

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Banner src={banner} />
      <Main>
        <Section>
          <H1>Glasses & Lens</H1>
          <P className='text-md'>
            Buy the best high-quality sunglasses from us.
            <br />
            More than 100 types of assortment.
          </P>
          <Section2>
            <Button
              type='button'
              className='btn btn-sm mt-2'
              onClick={() => navigate('/ocularis/sale')}
            >
              Start Shopping
            </Button>
          </Section2>
        </Section>
        <Section3>
          <IMG src={imge} alt='bannerImg' />
        </Section3>
      </Main>
    </div>
  )
}
