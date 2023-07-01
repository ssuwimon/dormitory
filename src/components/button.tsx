import { Button as Btn } from 'antd'
import styled from 'styled-components'
import { color } from '../shares/contants/color'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'

interface StyleProps {
    backgroundColor: string,
    color: string,
    hoverBack: string,
    focusBg?: string,
    border?: string
}
interface CssProps {
    [key: string]: StyleProps;
}

const style: CssProps = {
    create: {
        backgroundColor: color?.CREATE?.backgroundColor,
        color: color?.CREATE?.color,
        hoverBack: '#41ce00',
        focusBg: '#ffffff',
        border: color?.CREATE?.border
    },
    delete: {
        backgroundColor: '#f81b1b',
        color: '#ffffff',
        hoverBack: '#f81b1b',
        focusBg: '#b1b1b1'
    }
};


const ButtonStyles = styled(Btn)`
    text-transform: uppercase;
    font-size: 18px;
    height: 40px;
    display: flex;
    align-items: center;
    gap:6px;
    background-color: ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].backgroundColor;
    }};
    color: ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].color;
    }};  
    border-color: none;

    :where(.css-dev-only-do-not-override-yp8pcc).ant-btn-default:not(:disabled):hover {
    background-color: ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].focusBg;
    }};
    border-color:  ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].border;
    }};
    color: ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && '#000000'
    }};
    border-width: 2px;
}
    /* :where(.css-dev-only-do-not-override-yp8pcc).ant-btn-default > span:not(:disabled):active {
        border-color:  ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].border;
    }};
} */

    /* background-color: ${props => {
        return props?.onClick ? '#ffffff' : '#8654s'
    }}; */
   
 
/* :where(.css-dev-only-do-not-override-yp8pcc).ant-btn-default:not(:disabled):active {

        
background-color: #b8b8b8;
border-color: azure;

} */
:focus{
    outline-color:
     ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].focusBg;
    }};
    background-color: ${props => {
        const preset = Object?.keys(style).find(item => item === props?.theme)
        return preset && style[preset].hoverBack;
    }};
}
`
interface ButtonProps {
    type: string,
    value?: number,
    onClick?: React.MouseEventHandler,
    disabled?: boolean,
    clicked?: boolean,
    title?: string
}


function Button(props: ButtonProps) {
    const { type, value, disabled, onClick, title } = props
    const iconBtn = () => {
        if (type === 'create') {
            return <HiOutlinePlusSm />
        } else if (type === 'delete') {
            return <MdDelete />
        }
    }


    return (
        <ButtonStyles
            onClick={onClick}
            theme={type}
            disabled={disabled}
            icon={iconBtn()}
        >
            {type} {title}

        </ButtonStyles>
    )
}

export default Button