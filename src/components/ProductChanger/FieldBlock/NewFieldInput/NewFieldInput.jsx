import React from 'react'
import { addFieldAC } from '../../../../store/reducers/ProoductChangerReducer'
import Button from '../../../Button/Button'
import productChanger from '../../ProductChanger.module.scss'

export const NewFieldInput = (props) => {

    const addField = () => {
        let text = inputRef.current.value;
        console.log('Click!!')
        props.dispatch(addFieldAC(text));
    }

    
    let styles;
    if(props.appearance){
        styles = {
            height: 100,
            marginTop: 20,
            marginBottom: 20
        }
    } 
    else if (!props.appearance){
        styles = {
            height: 0,
            marginTop: 0,
            marginBottom: 0
        }
    }


    let inputRef = React.createRef()

    return (
        <div className={productChanger.newFieldInput} style={styles}>
            <input ref={inputRef} placeholder="Enter the name of new field"/>
            <Button text="Save" type="noIcon" onClick={ addField }/>
        </div>
    )
}
