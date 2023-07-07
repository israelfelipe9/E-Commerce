import { type Request, type Response } from 'express'
import { handleCreateProduct } from './createProduct';

export const createHandler = async (req: Request, res: Response) => {
  const { table, id } = req.params
  
  try {
    switch (table) {
      case 'products':
        if (await handleCreateProduct(req.body)) {
          return res.status(200).send({ message: 'Produto criado com sucesso!' })
        }
        return res.status(400).send({ message: 'Erro ao criar o produto!' })

      case 'users':
        // handler
        break;
    
      default:
        break;
    }
  } catch (error) {
    
  }
}