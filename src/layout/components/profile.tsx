import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import styled from 'styled-components';

const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  cursor: pointer;
  border: 1px solid #D2D2D2;
  width: 240px;
  border-radius: 10px;
  margin: 30px 16px;
  color: #ffff;
  font-weight: 200;
  position: relative;
  top: -89px;
  div{
    line-height: 0;
    margin-left: 40px;
    p{
      font-size: 14px;
    }

    .name{
      font-size: 18px;
    }
  }
`
const AvartarStyled = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`

const Wrapper = styled.div`
  height: 14vh;
`
export default function Profile() {
  return (
    <Wrapper >
     <AvartarStyled>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" size={70} />
      </AvartarStyled>
      <ProfileStyle>
        <div>
          <p className='name'> Suwimon Sithai </p>
          <p> admin </p>
        </div>
      </ProfileStyle>

    </Wrapper>
  )
}
