import styled from "styled-components"


const WrapperInputModalStyle = styled.div`
    display: flex;
    gap:14px;
    justify-content: center;
    margin-bottom: 10px;

`
const WrapperInputModal1Style = styled.div`
    display: grid;
    row-gap: 10px;
    
`
interface ChildrenProps {
    children:  React.ReactNode
}
export  function WrapperInputModal(props:ChildrenProps) {
  const {children} = props
  return (
    <WrapperInputModalStyle>
        {children}
    </WrapperInputModalStyle>
  )
}

export  function WrapperInputModal1(props:ChildrenProps) {
    const {children} = props
    return (
      <WrapperInputModal1Style>
          {children}
      </WrapperInputModal1Style>
    )
  }
  