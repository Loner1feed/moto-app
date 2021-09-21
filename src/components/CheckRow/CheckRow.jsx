import React from 'react'
import checkRow from './CheckRow.module.scss'

export const CheckRow = React.forwardRef((props, ref) => {
    return (
        <div className={[checkRow.checkRow, props.customClassName].join(' ')}>
            <input type="checkbox" id={props.id} className={props.itemtype} checked={props.checked} onChange={props.onChange} ref={ref}/>
            <label htmlFor={props.id}>
                <i className="icon-check"></i>
                {props.text}
            </label>
        </div>
    )
})
