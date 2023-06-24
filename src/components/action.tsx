import {FiMoreHorizontal} from 'react-icons/fi'
import {MdEdit} from 'react-icons/md'
import styled from 'styled-components'
import {RiDeleteBin4Fill} from 'react-icons/ri'

const IconWrapper = styled.div`
    background-color: ${props => props?.color && props?.color};
    width: max-content;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:4px;
`
export default function Action(){
  return (
    <Wrapper >
      <IconWrapper color='#247ED1'>
      <FiMoreHorizontal color='white'/>
      </IconWrapper>

      <IconWrapper color='#FFC700'>
      <MdEdit color='white' size='18px'/>
      </IconWrapper>

      <IconWrapper color='#FF0000'>
      <RiDeleteBin4Fill color='white' size='18px'/>
      </IconWrapper>
    </Wrapper>
  )
}
