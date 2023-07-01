import { Input as TextField } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import { InputLabel } from "./index";
import InputMask from "react-input-mask";

const Search = styled(TextField)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px;
  width: 200px;
  border: transparent;
  padding: 6px;
`;
const Wrapper = styled.div`
  // padding: 6px;'
  width: 100%;
`;

const MaskStyle = styled(InputMask)`
  // padding: 6px;'
  width: 94%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 28px;
  padding-left: 11px;
  :focus {
    border-color: #4096ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    caret-color: black;
  }
`;
export function InputSearch() {
  return (
    <Search placeholder="Room No" suffix={<RiSearch2Line color="#E2E2E2" />} />
  );
}
interface InputProps {
  placeholder?: string;
  label?: string;
  rows?: number;
  onChange?: React.ChangeEventHandler;
  value?: string;
}

export function Input(props: InputProps) {
  const { placeholder, label, onChange, value } = props;
  return (
    <Wrapper>
      {label}
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
}

export function MuliLineInput(props: InputProps) {
  const { placeholder, label, rows } = props;
  return (
    <div>
      {" "}
      {label} <TextArea rows={rows} />{" "}
    </div>
  );
}

export function InputIdCard(props: InputProps) {
  const { placeholder, label, onChange, value } = props;

  return (
    <Wrapper>
      {label}
      <MaskStyle
        mask="9 9999 99999 99 9"
        // value={idCard}
        onChange={onChange}
        // placeholder={placeholder}
        maskChar=""
      ></MaskStyle>
    </Wrapper>
  );
}
