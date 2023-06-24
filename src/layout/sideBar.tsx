import Logout from "./components/logout";
import Menu from "./components/menu";
import Profile from "./components/profile";
import styled from "styled-components";



const SidebarContainer = styled.div`
        width: 20vw;
        background-color: #515151;
        min-height: 100vh;
        /* padding-top: 50px; */
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export default function SideBar() {
  return (
    <SidebarContainer>
        <div style={{marginTop: '100px',marginBottom: '-80px'}}>
        <Profile/>
        </div>
        <Menu/>
        <div >
        <Logout/>
        </div>
    </SidebarContainer>
  )
}
