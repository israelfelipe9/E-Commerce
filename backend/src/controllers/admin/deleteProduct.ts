import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import ProductModel from 'src/models/product.model'
connectDB()

export const handleDeleteProduct = async (id: number) => {
  const product = await ProductModel.findOne({ id: id })

  if (!product) {
    return false
  }

  try {
    await ProductModel.deleteOne({ id: id })
    return true
  } catch (error) {
    return false
  }
}
