import { Router } from 'express'
import { getProducts } from '@controllers/products/getProducts'
import { registerNewUser } from '@controllers/users/register'
import { loginUser } from '@controllers/users/login'
import { createNewAdminUser } from '@controllers/admin/createNewAdminUser'
import { getUser } from '@controllers/users/getUser'
import { getRecommendation } from '@controllers/recommendation/getRecommendation'
import { deleteUser } from '@controllers/admin/deleteUser'
import { getUsers } from '@controllers/admin/getUsers'
import { editHandler } from '@controllers/admin/editController'
import { deleteHandler } from '@controllers/admin/deleteController'
import { createHandler } from '@controllers/admin/createController'
import { getOrders } from '@controllers/orders/getOrders'
import { newOrder } from '@controllers/orders/userOrder'
import { getOrder } from '@controllers/orders/getOrderById'
import { getProduct } from '@controllers/products/getProductById'
import { checkAuth } from 'src/middlewares/checkAuth'
// import { deleteProduct } from '@controllers/admin/deleteProduct'

export const router = Router()

router.get('/healthcheck', (_req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

/* Rotas cliente */
// Rotas GET
router.get('/products', getProducts)
router.get('/product/:id', getProduct)
router.get('/getUser', getUser)
router.get('/getOrder/:id', getOrder)

// Rotas POST
router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.post('/order', checkAuth, newOrder)
router.post('/buy')

/* Rotas admin */
router.get('/admin/users', getUsers)
router.get('/admin/orders', getOrders)
router.get('/admin/products')
router.get('/admin/products/:slug')
router.post('/admin/products')
router.post('/registerAdmin', createNewAdminUser)
router.delete('/admin/users/:id', deleteUser)

router.post('/admin/create/:table', createHandler)
router.delete('/admin/delete/:table/:id', deleteHandler)
router.put('/admin/edit/:table/:id', editHandler)

// Rotas recomendacao
router.post('/chat', getRecommendation)

// Rotas order
