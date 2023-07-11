import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface DecodedJWT {
  id: string
  email: string
  name: string
  role: number
  admin: boolean
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  if (!token) return res.status(406).send({ message: 'No authorization token provided.' })

  jwt.verify(token.slice(7, token.length), process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).send(err)
    } else {
      const { id, email, name, role, admin } = decoded as DecodedJWT
      req.body = { ...req.body, userId: id, email, name, role, admin }
      res.status(200)
      next()
    }
  })
}
