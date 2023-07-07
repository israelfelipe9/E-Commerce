import mongoose, { Schema, type Document } from 'mongoose'

interface User extends Document {
  name: string
  email: string
  password: string
  id: number
  // cpf?: string
  // phone?: string
  // address?: string
  // number?: string
  // complement?: string
  // district?: string
  // city?: string
  // state?: string
  // zip?: string
}

const UserSchema: Schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: Number, required: true, index: true },
  // cpf: { type: String },
  // phone: { type: String },
  // address: { type: String },
  // number: { type: Number },
  // complement: { type: String },
  // district: { type: String },
  // city: { type: String },
  // state: { type: String },
  // zip: { type: String }
})

const UserModel = mongoose.model<User>('Users', UserSchema)

export default UserModel
