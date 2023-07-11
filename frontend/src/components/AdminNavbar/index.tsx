import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { useNavigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Nav = styled.nav`
  background-color: #fff;
  color: #6d6d6d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 10vw;
  height: 100vh;
  padding: 1.2rem;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
  transition: all 0.1s ease-in;

  &:hover {
    color: #000;
    transition: all 0.2s ease-out;
    transform: scale(1.1);
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
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  border-radius: 6px;
  transition: 0.2s ease-in;
  color: black;
  font-weight: 700;
  font-size: 24px;
`

const LogoutButton = styled.button`
  background-color: transparent;
  color: #6d6d6d;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  align-self: center;
  left: 35%;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transition: 0.2s ease-out;
    transform: scale(1.03);
    color: rgb(165, 27, 27);
  }
`

export const AdminNavbar = () => {
  const navigate = useNavigate()
  const { user, auth, handleLogout } = useContext(AuthContext)
  return (
    <>
      <Nav>
        <ItemsContainer>
          <LogoImg src={logo} onClick={() => navigate('/home')} />
          <AuthContainer>{user.name}</AuthContainer>
          <Item>Home</Item>
          <Item onClick={() => navigate('/admin/products')}>Products</Item>
          <Item onClick={() => navigate('/admin/orders')}>Orders</Item>
          <Item onClick={() => navigate('/admin/users')}>Users</Item>
          <Item onClick={() => navigate('/home')}>Back to store</Item>
          <LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
        </ItemsContainer>
      </Nav>
      <Outlet />
    </>
  )
}
