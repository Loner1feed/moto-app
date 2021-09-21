import React from 'react'
import { createRef } from 'react/cjs/react.development';
import { changeSizeStateAC, priceChangeAC } from '../../store/reducers/ProoductChangerReducer';
import Button from '../Button/Button';
import { CheckRow } from '../CheckRow/CheckRow';

import { CategoryBlock } from './CategoryBlock/CategoryBlock';
import ColorsBlock from './ColorsBlock/ColorsBlock';
import FieldBlock from './FieldBlock/FieldBlock';
import ImgUploaderBlock from './ImgUploaderBlock/ImgUploaderBlock';
import productChanger from './ProductChanger.module.scss'

export const ProductChanger = (props) => {

    const arrLength = props.state.sizes.length;
    const [elRefs, setElRefs] = React.useState([]);

    React.useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
            Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [arrLength]);

    let priceInput = createRef();

    const priceChange = () => {

        priceInput.current.value = priceInput.current.value.replace (/\D/, '')

        let text = priceInput.current.value
        props.dispatch(priceChangeAC(text))
    }

    const changeSizeState = (key) => {
        let id = key;
        let itemType = elRefs[key].current.className;
        let checked = elRefs[key].current.checked
        // console.log(checked)
        props.dispatch(changeSizeStateAC(id, itemType, checked))
    }

    const saveChanges = () => {
        console.log('saved')
    }

    let items = props.state.sizes.map((item, i) => <CheckRow id={item.type + item.id} itemtype={item.type} text={item.text} key={i} ref={elRefs[i]} checked={props.state.sizes[i].checked} onChange={() => {changeSizeState(i)}}  customClassName="checkRow__sizes" />);

    return (
        <div className={productChanger.changer}>
            <div className={productChanger.main}>
                <div className={productChanger.description}>
                    <FieldBlock fields={props.state.fields} dispatch={props.dispatch}/>

                    <ImgUploaderBlock state={props.state.imageFiles} dispatch={props.dispatch}/>

                    <div className={productChanger.navBlock}>
                        <Button text="Cancel" type="navButton"/>
                        <Button text="Save" type="navButton" onClick={ saveChanges }/>
                    </div>
                </div>

                <div className={productChanger.sideBlock}>
                    <h2 className="title">Select category</h2>
                    <CategoryBlock state={props.state.categoryBlock} dispatch={props.dispatch}/>

                    <h2 className="title">Specify colors</h2>
                    <ColorsBlock state={props.state.colorsBlock} dispatch={props.dispatch}/>

                    <h2 className="title">Specify sizes</h2>
                    {/* sizes */}
                    <div className={productChanger.checkBlock}>
                        {items}
                    </div>

                    <h2 className="title">Price</h2>
                    <input type="text" className={productChanger.priceInput} ref={priceInput} value={props.state.priceText} onChange={priceChange} />
                </div>
            </div>
        </div>
    )
}

export default ProductChanger;