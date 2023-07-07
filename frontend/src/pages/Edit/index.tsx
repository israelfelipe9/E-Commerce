import { BaseWrapper } from "@components/BaseWrapper"
import { useParams } from "react-router-dom"
import { EditContainer } from "@containers/EditContainer"

export const EditPage = () => {
  const { id } = useParams()

  return (
    <BaseWrapper>
      <h1>Edit 📝</h1>
      <EditContainer id={id}/>
    </BaseWrapper>  
  )
}