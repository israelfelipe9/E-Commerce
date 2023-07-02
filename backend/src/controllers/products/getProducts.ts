import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import ProductModel from 'src/models/product.model'
connectDB()

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await ProductModel.find()
    return res.status(200).send(products)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: error })
  }
}
