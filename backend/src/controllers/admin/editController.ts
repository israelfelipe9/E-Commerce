import { type Request, type Response } from 'express'
import { handleEditProduct } from './editProduct'

export const editHandler = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (await handleEditProduct(id, req.body)) {
      return res.status(200).send({ message: 'Produto editado com sucesso!' })
    }
  } catch (error) {
    return res.status(400).send({ message: 'Erro ao editar produto!' })
  }
}
