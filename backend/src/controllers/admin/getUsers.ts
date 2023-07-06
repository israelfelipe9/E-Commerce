import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import UserModel from 'src/models/user.model'
connectDB()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const people = await UserModel.find()
    res.status(200).json(people)
  } catch (error) {
    return res.status(400).send({ message: error })
  }
}
