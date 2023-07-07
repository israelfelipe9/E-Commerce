import { type Request, type Response } from 'express'
import { handleEditProduct } from './editProduct';
import { handleDeleteProduct } from './deleteProduct';

export const deleteHandler = async (req: Request, res: Response) => {
  const { table, id } = req.params
  
  try {
    switch (table) {
      case 'products':
        if (await handleDeleteProduct(Number(id))) {
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