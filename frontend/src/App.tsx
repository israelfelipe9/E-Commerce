import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginForm } from './Containers/LoginForm'
import { RegisterForm } from './Containers/RegisterForm'
import { RecommendForm } from './Containers/RecommendForm'
import { PaymentForm } from './Containers/PaymentForm'
import { Sale } from './pages/Sale'
import { Product } from './pages/Sale/product'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import NotFound from './components/notFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recommend" element={<RecommendForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/sale/:id" element={<Product />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  )
}

export default App
