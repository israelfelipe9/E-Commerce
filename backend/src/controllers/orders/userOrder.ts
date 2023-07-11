import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import OrderModel from 'src/models/order.model'
connectDB()

interface Order {
  userId: string
  date: Date
  products: {
    productId: string
    quantity: number
    name: string
  }[]
  totalPrice: number
}

export const newOrder = async (req: Request, res: Response) => {
  try {
    const { userId, products, totalPrice }: Order = req.body

    const newOrder = new OrderModel({
      userId,
      date: new Date(),
      products,
      totalPrice
    })

    const savedOrder = await newOrder.save()
    return res
      .status(200)
      .json({ message: 'Order created successfully', order: savedOrder })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error creating order', error })
  }
}
