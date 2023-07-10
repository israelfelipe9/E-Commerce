import ProductModel from 'src/models/product.model'

export const handleEditProduct = async (id: string, payload) => {
  console.log(payload)
  try {
    await ProductModel.updateOne({ _id: id }, payload)
    return true
  } catch (error) {
    return error
  }
}
