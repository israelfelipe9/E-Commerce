import { type Request, type Response } from 'express'
import { handleEditProduct } from './editProduct';

export const editHandler = async (req: Request, res: Response) => {
  const { table, id } = req.params

  try {
    switch (table) {
      case 'products':
        if (await handleEditProduct(Number(id), req.body)) {
          res.status(200).send({ message: 'Produto editado com sucesso!' })
        }
        return res.status(400).send({ message: 'Erro ao editar produto!' })
      
      case 'users':
        // handler
        break;
    
      default:
        break;
    }
  } catch (error) {
    
  }
}