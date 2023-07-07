import { BaseWrapper } from "@components/BaseWrapper"
import { useParams } from "react-router-dom"
import { ViewContainer } from "@containers/ViewContainer"

export const ViewPage = () => {
  const { id } = useParams()

  return (
    <BaseWrapper>
      <h1>View 🔍</h1>
      <ViewContainer id={id}/>
    </BaseWrapper>  
  )
}