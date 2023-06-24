import React from 'react'
import {  Select  as Dropdown} from 'antd'
import styled from 'styled-components'

interface SelectProps {
    label: string
}

const SelectStyled = styled.div`
    display: flex;
    flex-direction: column;
`
export default function Select(props:SelectProps) {
    const {label} = props
  return (
 <SelectStyled>
    {label}
    <Dropdown
    style={{ width: '100%' }}
    options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    >
      
    </Dropdown>
 </SelectStyled>
  )
}
