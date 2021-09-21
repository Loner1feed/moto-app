import React from 'react'
import field from './Fields.module.scss'

export const Field = React.forwardRef((props, ref) => {
    // console.log(ref)
    return (
        <div className={field.field}>
            <h2 className="title">{props.titleText}</h2>
            <input type="text" ref={ref} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
})


export default Field;
