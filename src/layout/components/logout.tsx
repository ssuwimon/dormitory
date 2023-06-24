import styled from "styled-components"
import {BiLogOutCircle} from 'react-icons/bi'

const Wrapper = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  cursor: pointer;
  border: 1px solid #D2D2D2;
  width: 230px;
  border-radius: 10px;
  margin: 30px 16px;
  color: #ffff;
  font-weight: 200;
  position: relative;
  margin-bottom: 0;
  padding: 8px;
  gap:8px;
`
export default function Logout() {
  return (
    <Wrapper>
        <BiLogOutCircle size={28}/>
      Logout
    </Wrapper>
  )
}
