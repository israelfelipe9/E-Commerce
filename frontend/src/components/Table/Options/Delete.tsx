import { IconModal } from '@components/Modal/IconModal'
import { faCircleCheck, faTrash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '@services/api'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const OptionsItem = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    transition: 100ms ease-in-out;
    background-color: ${props => props.theme.colors.primaryLightest};
  }
`

export const Delete = ({ item, columns }: any) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { mutate } = useMutation({
    mutationFn: async () => {
      const path = location.pathname.split('/')
      const table = path[2]
      return (await api.delete(`admin/delete/${table}/${item.id}`)).data
    },
    onError: (error: AxiosError<{ message: string }>) => setError(error.response?.data.message ?? 'Erro inesperado'),
    onSuccess: () => setSuccess(true)
  })
  const handleDelete = () => mutate()

  return (
    <>
      {success && <IconModal
        type='success'
        icon={faCircleCheck}
        title='Registro deletado com sucesso!'
        closeFunction={() => setSuccess(false)}
        successFunction={() => setSuccess(false)}
      />}
      {error && <IconModal
        type='error'
        icon={faXmarkCircle}
        title='O Registro não foi deletado com sucesso!'
        text={error}
        closeFunction={() => setError('')}
        successFunction={() => setError('')}
      />}
      <OptionsItem onClick={() => handleDelete()}>
        <FontAwesomeIcon icon={faTrash} /> Excluir
      </OptionsItem>
    </>
  )
}