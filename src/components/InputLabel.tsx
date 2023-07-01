import React from 'react'
import styled from 'styled-components'



interface InputLabelProps {
    label?: string
}

const InputLabelStyle = styled.div`
    /* margin-top: 24px; */

`
export default function InputLabel(props:InputLabelProps) {
    const {label} = props
  return (
    <InputLabelStyle>
      {label}
    </InputLabelStyle>
  )
}
