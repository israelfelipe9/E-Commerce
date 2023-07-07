import { BaseWrapper } from "@components/BaseWrapper"
import { useParams } from "react-router-dom"
import { NewProductContainer } from "src/Containers/newProductContainer"

export const NewProductPage = () => {
  const { id } = useParams()

  return (
    <BaseWrapper>
      <h1>New Product</h1>
      <NewProductContainer id={id}/>
    </BaseWrapper>  
  )
}