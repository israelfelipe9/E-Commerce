import { type Request, type Response } from 'express'
import bcrypt from 'bcryptjs'
import AdminModel from '../../models/admin.model'

interface Admin {
  name: string
  email: string
  password: string
  role: 1 | 2 | 3
}

export const createNewAdminUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role }: Admin = req.body

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ message: err })
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).json({ message: err })
        const newAdmin = new AdminModel({
          name,
          email,
          password: hash,
          role
        })

        const savedAdmin = await newAdmin.save()
        return res.status(200).json({ message: 'Admin created successfully', savedAdmin })
      })
    })
  } catch (error) {
    return res.status(500).json({ message: 'Error creating admin' })
  }
}
