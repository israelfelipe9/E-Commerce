import mongoose, { Schema, type Document } from 'mongoose'

// interface itemOrder {
//   id: string
//   quantity: number
// }

interface Order extends Document {
  userId: string
  date: Date
  products: {
    productId: string
    quantity: number
    name: string
  }[]
  totalPrice: number
}

const OrderSchema: Schema = new Schema<Order>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  products: [{
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }],
  totalPrice: { type: Number, required: true },
})

const OrderModel = mongoose.model<Order>('Orders', OrderSchema)

export default OrderModel
