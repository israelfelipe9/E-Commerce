import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { useNavigate, Outlet } from 'react-router-dom'
import { Cart } from '../Navbar/Cart'
import { UserData } from './UserData'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Nav = styled.nav`
  background-color: #fff;
  color: #6d6d6d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25vw;
  width: 100vw;
  height: auto;
  box-shadow: inset 0px -1px 0px #efefef;
`

const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`

const LogoImg = styled.img`
  aspect-ratio: 1 / 1;
  height: 3rem;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-out;
    transform: scale(1.1);
  }
`

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: 0.2s ease-in;
`

const AuthButton = styled.button`
  background-color: #EFA602;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-out;
    background-color: #ffd571;
  }
`

const AuthButtonOutline = styled(AuthButton)`
  background-color: transparent;
  color: #EFA602;
  box-sizing: border-box;
  border: 1px solid #EFA602;
  
  &:hover {
    transition: 0.2s ease-out;
    background-color: #d82296;
    color: #fff;
    border: 1px solid #d82296;
  }
`

export const Navbar = () => {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)

  return (
    <>
      <Nav>
        <ItemsContainer>
          <LogoImg src={logo} onClick={() => navigate('/ocularis/home')}/>
          <Item onClick={() => navigate('/ocularis/home')}>Home</Item>
          <Item onClick={() => navigate('/ocularis/sale')}>Sale</Item>
          <Item onClick={() => navigate('/ocularis/recommend')}>Recomendation</Item>
          <AuthContainer>
            <Cart />
            {auth ? <UserData /> :
            <>
              <AuthButton onClick={() => navigate('/ocularis/login')}>Login</AuthButton>
              <AuthButtonOutline onClick={() => navigate('/ocularis/register')}>Register</AuthButtonOutline>
            </>
            }
          </AuthContainer>
        </ItemsContainer>
      </Nav>
      <Outlet />
    </>
  )
}
