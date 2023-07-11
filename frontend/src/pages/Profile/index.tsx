import { useEffect, useState } from 'react'
import styled from 'styled-components'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AxiosError } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { UserProfileContainer } from '@Containers/UserProfile'

export const UserProfilePage = () => {
  
  return (
    <BaseWrapper>
      <h1>Profile</h1>
      <UserProfileContainer />
    </BaseWrapper>
  )
}
