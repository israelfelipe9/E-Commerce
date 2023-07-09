import { Route, Routes, Navigate } from 'react-router-dom'
import { RecommendForm } from './Containers/RecommendForm'
import { PaymentForm } from './Containers/PaymentForm'
import { Sale } from './pages/Sale'
import { Product } from './pages/Sale/product'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import NotFound from './components/notFound'
import './App.css'
import { CartPage } from './pages/Cart'
import { RegisterPage } from './pages/Register'
import { LoginPage } from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import { AdminNavbar } from './components/AdminNavbar'
import { AdminHomePage } from './pages/AdminHome'
import { AdminUsersPage } from './pages/AdminUser'
import { Footer } from './components/Footer'
import { UserProfile } from './pages/Profile'
import { UserOrders } from './pages/Orders'
import { ProductsPage } from './pages/Products'
import { ViewPage } from './pages/View'
import { EditPage } from './pages/Edit'
import { NewProductPage } from './pages/newProduct'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path='ocularis' element={<Navbar />}>
            <Route element={<Footer />}>
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='home' element={<Home />} />

              {/* need to be autenticated */}
              <Route path='profile' element={<UserProfile />} />
              <Route path='orders' element={<UserOrders />} />

              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />

              <Route path='recommend' element={<RecommendForm />} />

              <Route path='payment' element={<PaymentForm />} />

              <Route path='sale' element={<Sale />} />
              <Route path='sale/:id' element={<Product />} />

              <Route path='cart' element={<CartPage />} />
              <Route path='not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/ocularis/not-found' />} />
            </Route>
          </Route>

          <Route path='ocularis' element={<AdminNavbar />}>
            <Route path='admin' element={<AdminHomePage />} />
            <Route path='admin/users' element={<AdminUsersPage />} />
            <Route path='admin/products' element={<ProductsPage />} />
            <Route path='admin/products/new' element={<NewProductPage />} />
            <Route path='admin/products/view/:id' element={<ViewPage />} />
            <Route path='admin/products/edit/:id' element={<EditPage />} />
            {/* <Route path='rewards/delete/:id' element={<DeletePage />} /> */}
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
