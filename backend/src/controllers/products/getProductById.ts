import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import ProductModel from 'src/models/product.model'
connectDB()

export const getProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try {
    const product = await ProductModel.findOne({ id: id })
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).send(product)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: error })
  }
}
