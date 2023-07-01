import styled from "styled-components"


interface PropsIcon {
  icon: React.ReactNode
}

const IconStyled = styled.div` 
    font-size: 16px;
 
`

export default function Icon(props:PropsIcon): React.ReactElement {
  
  return (
    <IconStyled>
        {props?.icon}
    </IconStyled>
  )
}
