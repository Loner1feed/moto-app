import React from 'react'
import fields from './Fields.module.scss';

export const Tarea = React.forwardRef((props, ref) => {
    // console.log(ref)
    return (
        <div className={fields.tarea}>
            <h2 className="title">{props.titleText}</h2>
            <textarea placeholder={props.placeholder} onChange={props.onChange} ref={ref}></textarea>
        </div>
    )
})

export default Tarea