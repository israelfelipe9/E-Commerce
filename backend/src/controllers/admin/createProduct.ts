import ProductModel from "src/models/product.model"

export const handleCreateProduct = async (payload) => {
  try {
    const { brand, name, description, photo, price, stock, sold, slug } = payload

    const product = new ProductModel({
      id: Math.floor(Math.random()*100),
      brand,
      name,
      description,
      photo,
      price,
      qtInStock: stock,
      qtSold: sold,
      slug
    })
    await product.save()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}