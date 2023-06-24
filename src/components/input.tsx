import { Input as TextField } from "antd"
import TextArea from "antd/es/input/TextArea"
import styled from "styled-components"
import { RiSearch2Line } from 'react-icons/ri'
import { InputLabel } from "./index"



const Search = styled(TextField)`
  
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px;
  width: 200px;
  border: transparent;
  padding: 6px;
`

export function InputSearch() {
  return <Search placeholder="Room No" suffix={<RiSearch2Line color='#E2E2E2' />} />
}
// const InputStyle = styled(TextField)`
//   border-width: 1.5px;
//   width: 200px;
//   padding: 6px;
// `
interface InputProps {
  placeholder?: string,
  label?: string,
  rows?: number
}



export function Input(props: InputProps) {
  const { placeholder, label } = props
  return <div> <div>{label}</div> <TextField placeholder={placeholder} /> </div>
}

export function MuliLineInput(props: InputProps) {
  const { placeholder, label, rows } = props
  return <div> {label} <TextArea rows={rows} /> </div>
}
