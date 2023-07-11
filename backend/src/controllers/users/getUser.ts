import { type Request, type Response } from 'express'

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId, name, email } = req.body
    return res.status(200).json({ userId, name, email })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error })
  }
}
