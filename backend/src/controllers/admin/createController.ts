import { type Request, type Response } from 'express'
import {  } from './deleteProduct';
import { handleCreateProduct } from './createProduct';

export const createHandler = async (req: Request, res: Response) => {
  const { table, id } = req.params
  
  try {
    switch (table) {
      case 'products':
        if (await handleCreateProduct(req.body)) {
          return res.status(200).send({ message: 'Produto deletado com sucesso!' })
        }
        return res.status(400).send({ message: 'Erro ao deletar produto!' })

      case 'users':
        // handler
        break;
    
      default:
        break;
    }
  } catch (error) {
    
  }
}