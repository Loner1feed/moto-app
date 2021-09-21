import React, { useState } from 'react'
import Expand from 'react-expand-animated';
import expandList from './ExpandList.module.scss'
import { CheckRow } from '../CheckRow/CheckRow';
import { createRef } from 'react/cjs/react.development';
import { changeCheckboxStateAC } from '../../store/reducers/ProoductChangerReducer';

const ExpandList = (props) => {
    // debugger
    let init = {open: false}
    const [state, setState] = useState(init);

    const changeCheckboxState = (key) => {
        // console.log('change')
        let id = key;
        let itemType = elRefs[key].current.className;
        let checked = elRefs[key].current.checked
        // console.log(checked)
        props.dispatch(changeCheckboxStateAC(id, itemType, checked))
    }

    const arrLength = props.items.length;
    const [elRefs, setElRefs] = React.useState([]);

    React.useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
            Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [arrLength]);
    
    let items = props.items.map((item, i) => <CheckRow id={item.type + item.id} itemtype={item.type} text={item.text} key={i} ref={elRefs[i]} checked={props.items[i].checked} onChange={() => {changeCheckboxState(i)}} />);

    return (
        <div className={expandList.expand}>
            <span className={expandList.heading}  onClick={() => setState({open: !state.open})}>
                {props.text}
                <i className="icon-chevron"></i>
            </span>

            <Expand open={state.open}>
                <div className={expandList.body}>
                    {items}
                </div>
            </Expand>
        </div>
    );
}

export default ExpandList;

