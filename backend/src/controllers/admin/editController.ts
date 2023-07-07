import { type Request, type Response } from 'express'
import { handleEditProduct } from './editProduct';

export const editHandler = async (req: Request, res: Response) => {
  const { table, id } = req.params

  try {
    switch (table) {
      case 'products':
        handleEditProduct(Number(id), req.body)
        break;
      
      case 'users':
        // handler
        break;
    
      default:
        break;
    }
  } catch (error) {
    
  }
}