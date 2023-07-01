import { FiMoreHorizontal } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { RiDeleteBin4Fill } from "react-icons/ri";

interface ActionProps {
  onClick?: React.MouseEventHandler;
}

const IconWrapper = styled.div`
  background-color: ${(props) => props?.color && props?.color};
  width: max-content;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;
export function Action(props: ActionProps) {
  const { onClick } = props;
  return (
    <Wrapper>
      <IconWrapper color="#247ED1" onClick={onClick}>
        <FiMoreHorizontal color="white" />
      </IconWrapper>

      <IconWrapper color="#FFC700">
        <MdEdit color="white" size="18px" />
      </IconWrapper>

      <IconWrapper color="#FF0000">
        <RiDeleteBin4Fill color="white" size="18px" />
      </IconWrapper>
    </Wrapper>
  );
}

export function EditAction(props: ActionProps) {
  const { onClick } = props;
  return (
    <IconWrapper color="#FFC700">
      <MdEdit color="white" size="18px" />
    </IconWrapper>
  );
}
export function DeleteAction(props: ActionProps) {
  const { onClick } = props;
  return (
    <IconWrapper color="#FF0000">
      <RiDeleteBin4Fill color="white" size="18px" />
    </IconWrapper>
  );
}
export function SeeMoreAction(props: ActionProps) {
  const { onClick } = props;
  return (
    <IconWrapper color="#247ED1" onClick={onClick}>
    <FiMoreHorizontal color="white" />
  </IconWrapper>
  );
}
