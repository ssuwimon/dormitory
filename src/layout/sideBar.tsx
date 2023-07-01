import Logout from "./components/logout";
import Menu from "./components/menu";
import Profile from "./components/profile";
import styled from "styled-components";



const SidebarContainer = styled.div`
        width: 320px;
        background-color: #515151;
        min-height: 100vh;
        // padding-top: 50px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 300px) and (max-width:800px) {
          width:100px;
          min-height: 100vh;
          
        }
        .logout{

        }
`

export default function SideBar() {
  return (
    <SidebarContainer>
        <div style={{marginTop: '100px',marginBottom: '-80px'}}>
        <Profile/>
        </div>
        <Menu/>
        <div className="logout">
        <Logout />
        </div>
    </SidebarContainer>
  )
}
