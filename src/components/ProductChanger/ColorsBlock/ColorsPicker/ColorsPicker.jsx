import React, { useState } from 'react'
import { colorPickAC } from '../../../../store/reducers/ProoductChangerReducer'
import colorsBlock from '../ColorsBlock.module.scss'
import ColorsRow from '../ColorsRow/ColorsRow'

export const ColorsPicker = (props) => {

    let colorValue = 'f5f5f5'

    let color = {
        background: '#' + colorValue,
    }
    // debugger

    let init = {
        appearance: false,
    }

    const [state, setState] = useState(init)

    const pickerSelect = (key) => {
        let id = key
        props.dispatch(colorPickAC(id))
    }

    const showPickerBlock = () => [
        setState({
            appearance: !state.appearance,
            close: !state.close
        })
    ]
    
    let pickerItems = props.colors.map((item, i) => <ColorsRow key={i} bgColor={item.bgColor} text={item.text} onClickCustom={() => {pickerSelect(i)}} />)

    let pickerBlockStyles
    if(state.appearance){
        pickerBlockStyles = {
            height: 150
        }
    }
    else if (!state.appearance){
        pickerBlockStyles = {
            height: 0
        }
    }

    return (
        <div className={colorsBlock.colorsPicker}>
            <div className={colorsBlock.pickerRow} onClick={showPickerBlock}>
                <div className={colorsBlock.pickerButton}>
                    <i className="icon-plus"></i>
                </div>

                <span>Add new color</span>
            </div>

            <div className={colorsBlock.pickerBlock} style={pickerBlockStyles}>
                <h5 className="title">Select color:</h5>
                <div>
                    { pickerItems }
                </div>
            </div>

        </div>
    )
}

export default ColorsPicker