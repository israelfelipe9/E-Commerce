import { type Request, type Response } from 'express'
import { connectDB } from '../../database'
import UserModel from 'src/models/user.model'
import bcrypt from 'bcryptjs'
connectDB()

interface UserForm extends User {
  confirmPassword: string
  termsAndConditions: boolean
}

export const registerNewUser = async (req: Request, res: Response) => {
  try {
    const {
      confirmPassword,
      email,
      name,
      password,
      termsAndConditions,
    }: UserForm = req.body

    if (
      !confirmPassword ||
      !email ||
      !name ||
      !password ||
      !termsAndConditions
    ) {
      return res.status(400).json({ message: 'Please fill all the fields' })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' })
    }
    if (!termsAndConditions) {
      return res
        .status(400)
        .json({ message: 'Please accept the terms and conditions' })
    }
    if (await UserModel.exists({ email })) {
      return res.status(400).json({ message: 'User already exists' })
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err
        try {
          const user = UserModel.create({
            name,
            email,
            password: hash,
          })

          ;(await user).save()

          return res.status(201).json({ message: 'User created successfully' })
        } catch (error) {
          return res.status(500).json({ message: error })
        }
      })
    })
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user' })
  }
}
