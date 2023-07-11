import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import OrderModel from 'src/models/order.model'
connectDB()

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const { userId } = _req.body
    const orders = await OrderModel.find({
      userId,
    })
    return res.status(200).send(orders)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: error })
  }
}
