import React from 'react'
import styled from 'styled-components'



interface InputLabelProps {
    label?: string
}

const InputLabelStyle = styled.div`
    /* margin-top: 24px; */

`
export default function InputLabel(props:InputLabelProps) {
    console.log("🚀 ~ file: InputLabel.tsx:15 ~ InputLabel ~ props:", props)
    const {label} = props
  return (
    <InputLabelStyle>
      {label}
    </InputLabelStyle>
  )
}
