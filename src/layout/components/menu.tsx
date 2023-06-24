import { ReactNode } from "react"
import { menuData } from "../menuData"
import styled from "styled-components"
import {Link} from 'react-router-dom'
 
interface mapProp {
  label: string,
  icon: ReactNode,
  link?: string 
}

const MenuItemStyled = styled.div`
line-height: 50px;
display: flex;
  color: #000000;
  margin-left: 10px;

  cursor: pointer;
 :hover{
  background-color: #bdbdbd;
  color:#ff3b3b;
  border-radius: 16px 0 0 16px;
  margin-left: 10px;
  
 }
.wr{
  width:100%;

  gap: 20px;
  display: flex;
  padding-right: 46px;
  justify-content: center;
  
 }
 .icon{
  width: 20%;
  text-align: left;
  margin-left: 42px;
  /* margin: auto; */
 }

`
const Wrapper = styled.div`
  width: 100%;

`

const LinkWrapper =styled(Link)`
  color: #292929;

`
export default function Menu(): JSX.Element {

  return (
    <Wrapper>
      {
        menuData?.map((menuItem: mapProp, index: number) => (
          <MenuItemStyled key={index}>
          
         <LinkWrapper to={`${menuItem?.link}`}>
         
                {menuItem?.icon}
        
                {menuItem?.label}
          </LinkWrapper>
          
          </MenuItemStyled>
        ))
      }
    </Wrapper>
  )
}
