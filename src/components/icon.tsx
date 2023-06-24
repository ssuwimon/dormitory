import styled from "styled-components"


interface PropsIcon {
  icon: React.ReactNode
}

const IconStyled = styled.div` 
    font-size: 16px;
 
`

export default function Icon(props:PropsIcon): React.ReactElement {
  console.log("🚀 ~ file: icon.tsx:13 ~ Icon ~ props:", props?.icon)
  
  return (
    <IconStyled>
        {props?.icon}
    </IconStyled>
  )
}
