import React from 'react'
import colorsBlock from '../ColorsBlock.module.scss'

export const ColorsRow = (props) => {

    const closeClassName = [colorsBlock.closeBtn, 'close-btn'].join(' ')
    return (
        <div className={colorsBlock.colorsRow} onClick={props.onClickCustom}>
            <div className={colorsBlock.filler} style={{backgroundColor: '#' + props.bgColor}}></div>
            <span>{props.text}</span>
            <span className={closeClassName} onClick={props.onClick}>
                <i className="icon-plus"></i>
            </span>
        </div>
    )
}
export default ColorsRow
