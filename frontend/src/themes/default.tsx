import { type DefaultTheme } from 'styled-components'

interface DefaultProps extends DefaultTheme {
  colors: {
    primary: string
    secondary: string
    terciary: string
  },
  background: string
  textPrimary: string
  textSecondary: string
  textTertiary: string

}

export const Default: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    terciary: '#F2F2F2'
  },
  background: '#E2E2E2',
  textPrimary: '#000000',
  textSecondary: '#FFFFFF',
  textTertiary: '#F2F2F2'
}