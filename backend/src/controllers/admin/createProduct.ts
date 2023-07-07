import ProductModel from "src/models/product.model"

export const handleCreateProduct = async (payload) => {
  try {
    const { brand, name, description, photo, price, stock, sold, slug } = payload
    const product = new ProductModel({
      id: Math.random().toString(10),
      brand,
      name,
      description,
      photo,
      price,
      qtInstock: stock,
      qtSold: sold,
      quantity: stock,
      title: name,
      slug
    })
    await product.save()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}