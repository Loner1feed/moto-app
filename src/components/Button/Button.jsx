import React from 'react'
import button from './Button.module.scss'
import iconFont from '../../assets/styles/icon-font.css'

export const Button = (props) => {

    let customClass = (props.type === 'add') ? [button.button, button.add].join(' ') : button.button;

    switch (props.type) {
        case 'add':
            customClass = [button.button, button.add].join(' ')
            break;
    
        case 'navButton':
            customClass = [button.button, button.navButton].join(' ')
            break;

        case 'noIcon':
            customClass = [button.button, button.noIcon].join(' ')
            break;

        case 'addClose':
            customClass = [button.button, button.add, button.addClose].join(' ')
            break;

        default:
            customClass = button.button
            break;
    }

    return (
        <button className={customClass} onClick={props.onClick}>
            <i className={props.icon}></i>
            <span className={button.text}>{props.text}</span>
        </button>
    )
}

export default Button;