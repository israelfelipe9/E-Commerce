import { type Request, type Response } from 'express'
import { handleCreateProduct } from './createProduct'

export const createHandler = async (req: Request, res: Response) => {
  try {
    if (await handleCreateProduct(req.body)) {
      return res.status(200).send({ message: 'Produto criado com sucesso!' })
    }
  } catch (error) {
    return res.status(400).send({ message: 'Erro ao criar o produto!' })
  }
}
