import mongoose, { Schema, type Document } from 'mongoose'

interface Admin extends Document {
  name: string
  email: string
  password: string
  role: 1 | 2 | 3
}

const AdminSchema: Schema = new Schema<Admin>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: true }
})

const AdminModel = mongoose.model<Admin>('Admins', AdminSchema)

export default AdminModel
