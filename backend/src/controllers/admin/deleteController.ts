import { type Request, type Response } from 'express'
import { handleDeleteProduct } from './deleteProduct'

export const deleteHandler = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    if (await handleDeleteProduct(id)) {
      return res.status(200).send({ message: 'Produto deletado com sucesso!' })
    }
  } catch (error) {
    return res.status(400).send({ message: 'Erro ao deletar produto!' })
  }
}
