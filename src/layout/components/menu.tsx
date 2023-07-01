import { ReactNode } from "react";
import { menuData } from "../menuData";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface mapProp {
  label: string;
  icon: ReactNode;
  link?: string;
}

const MenuItemStyled = styled(Link)`
  line-height: 52px;
  color: #ffffff;
  cursor: pointer;
  background-color:red;
  .item:hover {
    background-color: #ffffff;
    color: #515151;
    border-radius: 50px 0 0 50px;
    margin-left: 20px;
    padding-left: 30px;
  }

  .item {
    padding-left: 50px;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
  @media screen and (min-width: 300px) and (max-width: 800px) {
    
    .item {
      color: #515151;
      padding-left: 0px;
    justify-content:center;
    margin-bottom:10px;
    
    }

    .item .label {
      display: none;
      
    }
     .icon {
    display: flex;
    color: #ffffff;
        flex-direction: column;
        
    }
    .item:hover {
      background-color: #ffffff;

      .icon {
        color: #515151;
        
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;

export default function Menu(): JSX.Element {
  return (
    <Wrapper>
      {menuData?.map((menuItem: mapProp, index: number) => (
        <MenuItemStyled key={index} to={`${menuItem?.link}`}>
          <div className="item">
            <div className="icon"> {menuItem?.icon}</div>

            <div className="label">{menuItem?.label}</div>
          </div>
        </MenuItemStyled>
      ))}
    </Wrapper>
  );
}
