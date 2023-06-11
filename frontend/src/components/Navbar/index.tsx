import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { useNavigate, Outlet } from 'react-router-dom'
import { Cart } from '../Navbar/Cart'

const Nav = styled.nav`
  background-color: #fff;
  color: #6d6d6d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25vw;
  width: 100vw;
  height: auto;
  box-shadow: inset 0px -1px 0px #EFEFEF;
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
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: #000;
  }
`

const LogoImg = styled.img`
  height: 2rem;
`



export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <Nav>
        <ItemsContainer>
          <LogoImg src={logo} />
          <Item onClick={() => navigate('/')}>Home</Item>
          <Item onClick={() => navigate('/sale')}>Sale</Item>
          <Item onClick={() => navigate('/login')}>Login</Item>
          <Item onClick={() => navigate('/register')}>Register</Item>
          <Cart />
        </ItemsContainer>
      </Nav>
      <Outlet />
    </>
  )
}