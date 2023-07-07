import { Button } from "@components/Button"
import { type IconDefinition, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface ModalProps {
  type: 'success' | 'error' | 'warning' | 'info'
  icon: IconDefinition
  title: string
  text?: string
  closeFunction: () => void
  successFunction: () => void
}

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`

const ModalContent = styled.div`
  width: 350px;
  background-color: #eeeeee;
  border-radius: 12px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 20px;
`

const ModalTitle = styled.h1`
  color: ${props => props.theme.textPrimary};
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`

const ModalText = styled.p`
  color: ${props => props.theme.textPrimary};
  font-size: 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

const ModalIcon = styled('div')<ModalProps>`
  path {
    color: ${({ type, theme }) => {
      switch (type) {
        case 'success':
          return theme.colors.success;
          break;
        case 'error':
          return theme.colors.error;
          break;
      
        default:
          return theme.colors.success;
          break;
      }
    }};
  }
  
  font-size: 120px;
`

export const IconModal = ({ type, icon, title, text, closeFunction, successFunction }: ModalProps) => {
    return (
      <ModalWrapper>
        <ModalContent>
          <ModalCloseButton onClick={closeFunction} data-testid="modal-close-button"><FontAwesomeIcon icon={faXmark} /></ModalCloseButton>
          <ModalIcon type={type}>
            <FontAwesomeIcon icon={icon} data-testid='modal-icon'/>
          </ModalIcon>
          <ModalTitle>{ title }</ModalTitle>
          <ModalText>{ text }</ModalText>
          <ButtonContainer>
            <Button label={'Confirmar'} type='button' onClick={successFunction}/>
          </ButtonContainer>
        </ModalContent>
      </ModalWrapper>
    )
}