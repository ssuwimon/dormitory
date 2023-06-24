import Button from "../../components/button"
import styled from "styled-components"
interface TitleBarProps {
    title: string,
    page:string,
    onClick?: React.MouseEventHandler,
}

const Wrapper = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:24px 0;
`

export default function TitleBar(props: TitleBarProps):JSX.Element {
  console.log("🚀 ~ file: titileBar.tsx:7 ~ TitleBar ~ props:", props)

  return (
    <Wrapper>
      {props?.title}
      <Button
        type='create'
        title={props?.page}     
        onClick={props?.onClick}  
      />
    </Wrapper>
  )
}
