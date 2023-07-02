import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const decoded = jwt.verify(token.slice(7, token.length), process.env.JWT_SECRET as string)
    return res.status(200).json({ user: decoded })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error })
  }
}