import ProductModel from "src/models/product.model"

export const handleEditProduct = async (id: number, payload) => {
  try {
    await ProductModel.updateOne({ id }, payload)
    return true
  } catch (error) {
    return error    
  }
}