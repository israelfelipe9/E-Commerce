import { Router } from 'express'
import { getProducts } from '@controllers/products/getProducts'
import { registerNewUser } from '@controllers/users/register'
import { loginUser } from '@controllers/users/login'
import { createNewAdminUser } from '@controllers/admin/createNewAdminUser'
import { getUser } from '@controllers/users/getUser'
import { getRecommendation } from '@controllers/recommendation/getRecommendation'
import { deleteProduct } from '@controllers/admin/deleteProduct'
import { deleteUser } from '@controllers/admin/deleteUser'
import { getUsers } from '@controllers/admin/getUsers'

export const router = Router()

router.get('/healthcheck', (_req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

/* Rotas cliente */
// Rotas GET
router.get('/products', getProducts)
router.get('/getUser', getUser)

// Rotas POST
router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.post('/buy')

/* Rotas admin */
router.get('/admin/users', getUsers)
router.get('/admin/products')
router.get('/admin/products/:slug')
router.post('/admin/products')
router.post('/registerAdmin', createNewAdminUser)
router.delete('/admin/products/:id', deleteProduct)
router.delete('/admin/users/:id', deleteUser)

// Rotas recomendacao
router.post('/chat', getRecommendation)
