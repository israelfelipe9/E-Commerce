import { type Request, type Response } from 'express'
import { connectDB } from 'src/database'
import UserModel from 'src/models/user.model'
connectDB()

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id

  const product = await UserModel.findOne({ _id: id })

  if (!product) {
    res.status(422).json({ message: 'User not found' })
    return
  }

  try {
    await UserModel.deleteOne({ _id: id })
    res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    return res.status(400).send({ message: error })
  }
}
