import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import OrderModel from 'src/models/order.model'
connectDB()

interface Order {
  IdClient: number
  IdItem: number
  date: Date
  total: number
  //   itens: itemOrder[] // List of items id
}

export const newOrder = async (req: Request, res: Response) => {
  try {
    const { IdClient, IdItem, date, total }: Order = req.body

    const newOrder = new OrderModel({
      IdClient,
      IdItem,
      date,
      total,
    })

    const savedOrder = await newOrder.save()
    return res
      .status(200)
      .json({ message: 'Order created successfully', savedOrder })
  } catch (error) {
    return res.status(500).json({ message: 'Error creating order' })
  }
}
