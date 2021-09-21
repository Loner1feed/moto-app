import React, { createRef, useRef, useState } from 'react'
import { addFieldAC, updateTextStateAC } from '../../../store/reducers/ProoductChangerReducer';
import Button from '../../Button/Button';
import Field from '../../Fields/Field';
import { Tarea } from '../../Fields/Tarea';
import productChanger from '../ProductChanger.module.scss';
import { NewFieldInput } from './NewFieldInput/NewFieldInput';

export const FieldBlock = (props) => {
    

    const updateTextState = (key) => {
        let id = key + 1;
        let text = elRefs[key].current.value
        props.dispatch(updateTextStateAC(id, text))
    }

    const arrLength = props.fields.length;
    const [elRefs, setElRefs] = React.useState([]);

    React.useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
            Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [arrLength]);


    //text inputs mapping
    let fields = props.fields.map((item, i) => {
        switch (item.type) {
            case 1:
                return <Field placeholder="Add text here" key={i} titleText={item.title} onChange={ () => {updateTextState(i)} } ref={elRefs[i]}/>

            case 2:
                // console.log('textarea' + i)
                return <Tarea placeholder="Add text here"  key={i} titleText={item.title} onChange={ () => {updateTextState(i)} } ref={elRefs[i]}/>

            default:
                break;
        }
    })


    const addField = () => {
        props.dispatch(addFieldAC())
    }

    return (
        <div className={productChanger.fieldBlock}>
            <div className={productChanger.fields}>
                {fields}
            </div>

            <Button text="Add details" icon="icon-plus" type="add" onClick={ addField }/>
        </div>
    )

    
}

export default FieldBlock;