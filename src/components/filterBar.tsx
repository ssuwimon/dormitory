
import { RiFilter2Fill } from 'react-icons/ri'
import styled from 'styled-components'
import {InputSearch} from './input'

const Wrapper = styled.div`
    background-color: #FAFAFA;
    border-radius: 8px;
    padding: 20px;
    color: #515151;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    
`

export default function FilterBar() {
  return (
    <Wrapper>
      <div>
        <RiFilter2Fill color="#C5C6C9" />

        filter
      </div>
      <InputSearch />
      <InputSearch />
    </Wrapper>
  )
}
