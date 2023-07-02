import mongoose, { Schema, type Document } from 'mongoose'

interface Product extends Document {
  title: string
  description: string
  price: number
  quantity: number
  slug: string
  category?: string
  image?: string
}

const ProductSchema: Schema = new Schema<Product>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  slug: { type: String, required: true },
  category: { type: String },
  image: { type: String }
})

const ProductModel = mongoose.model<Product>('Products', ProductSchema)

export default ProductModel
