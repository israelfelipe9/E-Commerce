import styled from 'styled-components'

const ImageDisplayTag = styled.img`
  width: 50px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

export const IconDisplay = ({ src }: { src: string }) => {
  const images = src.split(';')
  
  return (
    <ImageDisplayTag src={(import.meta.env.VITE_URL_S3_ICONS as string) + (images[0])} />
  )
}