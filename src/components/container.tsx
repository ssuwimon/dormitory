
import styled from "styled-components"
interface ChildrenProps {
    children :  React.ReactNode
}

const Wrapper = styled.div`
    font-size: 20px;
    justify-content: space-between;
    padding: 30px;
    margin-top: 50px;

`

export default function Container({children}:ChildrenProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
