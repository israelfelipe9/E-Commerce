import styled from 'styled-components'
import { forwardRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export interface ImageInputProps {
  name?: string
  label: string
  error: string | undefined
  multiple?: boolean
  accept?: string
  info?: string
  removeImageFromPreview: (index: number) => void
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  border: 2px dashed ${props => props.theme.colors.primaryLightest};
  border-radius: 12px;
  cursor: pointer;
  position: relativa;
  transition: ease-in-out 100ms;

  &:hover {
    transition: ease-in-out 100ms;
    background-color: ${props => props.theme.colors.primary};
  }
`

export const CustomInput = styled('input')<{error: string | undefined}>`
  background-color: transparent;
  width: 500px;
  height: 200px;
  cursor: pointer;
  position: absolute;
  margin-top: 5px;
  margin-bottom: ${props => props.error === undefined ? '15px' : '5px'};
  font-size: 16px;
  font-family: "DIN Pro", sans-serif;
  transition: ease-in 100ms;
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 12px;
  box-shadow: ${props => props.error !== undefined ? '0 0 0 2px #E7517E inset' : 'none'};
  color: transparent;

  &:focus {
    box-shadow: 0 0 0 0px ${props => props.theme.colors.primary} inset;
    transition: ease-in 100ms;
  }

  &:focus-visible {
    outline: 0;
  }

  &::-webkit-file-upload-button {
    display: none;
  }
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`

const Error = styled.span`
  color: #E7517E;
  font-size: 14px;
  margin-bottom: 20px;
`

const Info = styled.p`
  font-size: 16px;
`

const ImagePreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  gap: 20px;
  margin-top: 10px;
  word-break: break-all;
  position: relative;
`

const ImagePreviewSingleWrapper = styled.div`
  word-break: break-all;
  position: relative;
`

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
`

const FilenameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  gap: 20px;
  word-break: break-all;
  position: relative;
  font-weight: 600;
  margin-bottom: 10px;
`

const CloseButton = styled.div`
  position: absolute;
  top: -10px;
  left: 90px;
  font-size: 20px;
  cursor: pointer;

  path {
    fill: ${props => props.theme.colors.secondary};
    transition: 100ms ease-in-out;
  }

  path:hover{
    fill: ${props => props.theme.colors.secondaryLight};
    transition: 100ms ease-in-out;
  }
`

export const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>((props: ImageInputProps, ref: React.RefObject<HTMLInputElement>) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return
    setSelectedFiles(files)

    const previews: string[] = []

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()
      reader.readAsDataURL(files[i])
      reader.onload = () => {
        previews.push(reader.result as string);
        if (previews.length === files.length) {
          setImagePreviews(previews)
        }
      }
    }
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = Array.from(selectedFiles ?? []).filter((file, i) => i !== index)
    const newPreviews = imagePreviews.filter((preview, i) => i !== index)
    const dataTransfer = new DataTransfer()
    newFiles.forEach(file => {
      dataTransfer.items.add(file)
    })
    const newFileList = dataTransfer.files
    setSelectedFiles(newFileList)
    setImagePreviews(newPreviews)
    props.removeImageFromPreview(index)
  }

  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <InputContainer>
        <FontAwesomeIcon icon={faCloudArrowUp} fontSize={36}/>
        <Info>{props.info}</Info>
        <CustomInput type='file' {...props} ref={ref} multiple={props.multiple} accept={props.accept} onChange={handleFileChange} error={props.error}/>
        {props.error ? <Error>{props.error}</Error> : null}
      </InputContainer>
      <ImagePreviewContainer>
        {imagePreviews.length > 0 && (
          imagePreviews.map((preview, index) => (
            <ImagePreviewSingleWrapper key={index}>
              <CloseButton onClick={() => handleRemoveFile(index)}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </CloseButton>
              <ImagePreview src={preview} />
            </ImagePreviewSingleWrapper>
          ))
        )}
      </ImagePreviewContainer>
      <FilenameContainer>
        {selectedFiles && selectedFiles.length > 0 && (
          Array.from(selectedFiles).map((file, index) => (
            <Info key={index}>{file.name}</Info>
          ))
        )}
      </FilenameContainer>
    </>
  )
})

ImageInput.displayName = 'ImageInput'