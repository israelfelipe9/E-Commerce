import mongoose, { Schema, type Document } from 'mongoose'

interface Product extends Document {
  name: string
  brand: string
  description: string
  price: number
  qtInStock: number
  qtSold: number
  slug: string
  photo?: string[]
}

const ProductSchema: Schema = new Schema<Product>({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  qtInStock: { type: Number, required: true },
  qtSold: { type: Number, required: true },
  slug: { type: String, required: true },
  photo: { type: Array },
})

const ProductModel = mongoose.model<Product>('Products', ProductSchema)

export default ProductModel
