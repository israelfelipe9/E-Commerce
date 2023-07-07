import { Button } from "@components/Button"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface ModalProps {
  type?: string
  title: string
  text: string
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
  width: 20%;
  /* height: 30%; */
  background-color: #393053;
  border-radius: 12px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 20px;
`

const ModalTitle = styled.h1`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`

const ModalText = styled.p`
  color: white;
  font-size: 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export const Modal = ({ type='', title, text, closeFunction, successFunction }: ModalProps) => {
    return (
      <ModalWrapper>
        <ModalContent>
          <ModalCloseButton onClick={closeFunction}><FontAwesomeIcon icon={faXmark} /></ModalCloseButton>
          <ModalTitle>{ title }</ModalTitle>
          <ModalText>{ text }</ModalText>
          <ButtonContainer>
            <Button label={'Cancelar'} skinColor="secondary" onClickFunction={closeFunction}/>
            <Button label={'Confirmar'} skin="outline" skinColor="primary" onClickFunction={successFunction}/>
          </ButtonContainer>
        </ModalContent>
      </ModalWrapper>
    )
}