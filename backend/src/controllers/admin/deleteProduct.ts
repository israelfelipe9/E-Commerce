import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import ProductModel from 'src/models/product.model'
connectDB()

export const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const product = await ProductModel.findOne({ id: id })

  if (!product) {
    res.status(422).json({ message: 'Product not found' })
    return
  }

  try {
    await ProductModel.deleteOne({ id: id })
    res.status(200).json({ message: 'Product deleted' })
  } catch (error) {
    return res.status(400).send({ message: error })
  }
}
