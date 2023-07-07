import mongoose, { Schema, type Document } from 'mongoose'

// interface itemOrder {
//   id: string
//   quantity: number
// }

interface Order extends Document {
  IdClient: number
  IdItem: number
  date: Date
  total: number
  //   itens: itemOrder[] // List of items id
}

const OrderSchema: Schema = new Schema<Order>({
  IdClient: { type: Number, required: true, index: true },
  IdItem: { type: Number, required: true, index: true },
  date: { type: Date, required: true },
  total: { type: Number, required: true },
  //   itens: { type: Array, required: true },
})

const OrderModel = mongoose.model<Order>('Orders', OrderSchema)

export default OrderModel
