import mongoose, { Schema, type Document } from 'mongoose'

interface Product extends Document {
  id: number
  name: string
  description: string
  price: number
  qtInStcock: number
  qtSold: number
  slug: string
  photo?: string[]
}

const ProductSchema: Schema = new Schema<Product>({
  id: { type: Number, required: true, index: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  qtInStcock: { type: Number, required: true },
  qtSold: { type: Number, required: true },
  slug: { type: String, required: true },
  photo: { type: Array },
})

const ProductModel = mongoose.model<Product>('Products', ProductSchema)

export default ProductModel
