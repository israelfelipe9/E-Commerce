import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { Default } from './themes/default'
import { CartProvider } from './contexts/CartContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Default}>
        <CartProvider>
          <GlobalStyles />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
