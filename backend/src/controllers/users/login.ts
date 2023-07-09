import { type Request, type Response } from 'express'
import { connectDB } from '../../database'
import UserModel from 'src/models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import AdminModel from 'src/models/admin.model'
connectDB()

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: User = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all the fields' })
    }

    // Check if user is admin
    const admin = await AdminModel.findOne({ email })
    if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        console.log(err, result)
        if (err) return res.status(500).json({ message: err })
        if (!result)
          return res
            .status(400)
            .json({ message: 'User or password are wrong.' })
        const token = jwt.sign(
          {
            id: admin._id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
            admin: true,
          },
          process.env.JWT_SECRET as string
        )
        return res.status(200).json({
          user: {
            id: admin._id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
            admin: true,
          },
          token,
        })
      })
    } else {
      const user = await UserModel.findOne({ email })
      if (!user) return res.status(400).json({ message: 'User does not exist' })

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(500).json({ message: err })
        if (!result)
          return res
            .status(400)
            .json({ message: 'User or password are wrong.' })
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            name: user.name,
          },
          process.env.JWT_SECRET as string
        )
        return res.status(200).json({
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
          },
          token,
        })
      })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user' })
  }
}
