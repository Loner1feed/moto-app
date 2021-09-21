import React from 'react'
import { removeColorAC } from '../../../store/reducers/ProoductChangerReducer'
import colorsBlock from './ColorsBlock.module.scss'
import ColorsPicker from './ColorsPicker/ColorsPicker'
import ColorsRow from './ColorsRow/ColorsRow'

export const ColorsBlock = (props) => {

    const removeColor = (key) => {
        let id = key
        props.dispatch(removeColorAC(id))
    }

    // debugger
    let colorsRows = props.state.colors.map((item, i) => <ColorsRow key={i} bgColor={item.bgColor} text={item.text} onClick={() => {removeColor(i)}}/>)

    return (
        <div className={colorsBlock.colorsBlock}>
            {colorsRows}
            <ColorsPicker colors={props.state.colorPickerValues} dispatch={props.dispatch}/>
        </div>
    )
}

export default ColorsBlock