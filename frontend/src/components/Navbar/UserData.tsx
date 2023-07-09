import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  cursor: pointer;
  position: relative;
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #efa602;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-out;
    background-color: #ffd571;
  }
`

const Name = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

const OptionItem = styled.p`
  color: #6d6d6d;
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  cursor: pointer;
  padding: 0.5rem 3rem;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-out;
    color: #000;
    background-color: #efefef;
  }
`

export const UserData = () => {
  const [showOptions, setShowOptions] = useState(false)
  const { handleLogout, user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <UserContainer onClick={() => setShowOptions(!showOptions)}>
          <FontAwesomeIcon icon={faUser} color={'white'} />
          <Name>Hello, {user.name.split(' ')[0]}!</Name>
        </UserContainer>
        {showOptions && (
          <Options>
            <OptionItem onClick={() => navigate('/profile')}>
              Profile
            </OptionItem>
            <OptionItem onClick={() => navigate('/orders')}>Orders</OptionItem>
            {user.admin && (
              <OptionItem onClick={() => navigate('/admin')}>Admin</OptionItem>
            )}
            <OptionItem onClick={() => handleLogout()}>Logout</OptionItem>
          </Options>
        )}
      </Container>
    </>
  )
}
