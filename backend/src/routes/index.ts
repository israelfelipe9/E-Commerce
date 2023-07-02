import { Router } from 'express'
import ProductModel from '../models/product.model'
import UserModel from '../models/user.model'
import { getProducts } from '@controllers/products/getProducts'
import { registerNewUser } from '@controllers/users/register'

export const router = Router()

router.get('/', (_req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

router.get('/insertProduct', async (_req, res) => {
  try {
    const product = new ProductModel({
      title: 'Product 1',
      description: 'Product 1 description',
      price: 10,
      quantity: 10,
      slug: 'product-1',
      category: 'Category 1',
      image: 'https://picsum.photos/200/300'
    })

    await product.save()

    res.status(200).send({ message: 'Product successfuly inserted.' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }
})

/* Rotas cliente */
// Rotas GET
router.get('/products', getProducts)
router.get('/products/:id')

// Rotas POST
router.post('/register', registerNewUser)
router.post('/login')
router.post('/buy')

/* Rotas admin */
router.get('/admin/products')
router.get('/admin/products/:slug')
router.post('/admin/products')
