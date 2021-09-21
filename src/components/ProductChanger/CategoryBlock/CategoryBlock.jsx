import React from 'react'
import categoryBlock from './CategoryBlock.module.scss'
import ExpandList from '../../ExpandList/ExpandList'

export const CategoryBlock = (props) => {

    return (
        <div className={categoryBlock.categoryBlock}>
            <ExpandList text="Helmets" items={props.state.HelmetsItems} dispatch={props.dispatch}/>
            <ExpandList text="Motocross Clothing" items={props.state.Placeholder} dispatch={props.dispatch}/>
            <ExpandList text="Motocross Protection" items={props.state.Placeholder} dispatch={props.dispatch}/>
            <ExpandList text="Supermoto Clothing" items={props.state.Placeholder} dispatch={props.dispatch}/>
        </div>
    )
}
