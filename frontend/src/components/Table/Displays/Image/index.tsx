import styled from 'styled-components'

const ImageDisplayTag = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
`

export const ImageDisplay = ({ src }: { src: string }) => {
  const images = src.split(';')
  
  return (
    <ImageDisplayTag src={images[0]} />
  )
}