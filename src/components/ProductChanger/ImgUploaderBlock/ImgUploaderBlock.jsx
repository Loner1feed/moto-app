import React, { useEffect, useRef, useState } from 'react'
import imgUploaderBlock from './imgUploaderBlock.module.scss'
import fileIcon from '../../../assets/icons/files-icon.svg'
import img1 from '../../../assets/img/img1.png'
import img2 from '../../../assets/img/img2.png'
import { addFileAC, deleteFileAC } from '../../../store/reducers/ProoductChangerReducer'

export const ImgUploaderBlock = (props) => {

    let init = {
        open: false,
    }

    const [state, setState] = useState(init)
    const [drag, setDrag] = useState({drag: false})

    let styles, innerStyles
    if(state.open){
        styles = {
            display: 'flex'
        }
    }
    else if(!state.open){
        styles = {
            display: 'none'
        }
    }
    
    if(drag.drag){
        innerStyles = {
            borderColor: '#000000'
        }
    }
    else if(!drag.drag){
        innerStyles = {
            borderColor: '#ffffff'
        }
    }

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag({drag: true})
        // alert('drag')
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag({drag: false})
    }

    const onDropHandlef = (e) => {
        e.preventDefault()
        let files = e.dataTransfer.files
        props.dispatch(addFileAC(files))
        // console.log(files)
    }

    const wrapperRef = useRef(null);

    const modalOpener = () => {
        setState({open: !state.open})
    }

    const deleteImage = (i) => {
        console.log(i)
        props.dispatch(deleteFileAC(i))
    }

    // console.log(props.state[0])

    const closeClassName = [imgUploaderBlock.closeBtn, 'close-btn'].join(' ')
    let images = props.state.map((item, i) => {

        return (
            <div key={i} className={imgUploaderBlock.image}>
                <img src={item} alt="" />
                <span className={closeClassName} onClick={() => {deleteImage(i)}}>
                    <i className="icon-plus"></i>
                </span>
            </div>
        );
    })

    return (
        <div className={imgUploaderBlock.imgUploaderBlock} >
            <h5 className="title">Add Photo</h5>
            <div className={imgUploaderBlock.grid}>

            

                <div className={imgUploaderBlock.inner}>
                    <div className={imgUploaderBlock.image}>
                        <img src={img1} alt="" />
                            <span className={closeClassName}>
                        <i className="icon-plus"></i>
                </span>
                    </div>

                    <div className={imgUploaderBlock.image}>
                        <img src={img2} alt="" />
                        <span className={closeClassName}>
                            <i className="icon-plus"></i>
                        </span>
                    </div>

                    {images}
                </div>

                <a href="javascript://" className={imgUploaderBlock.button} onClick={modalOpener}>
                    <i className="icon-plus"></i>
                </a>
            </div>

            <div className={imgUploaderBlock.uploaderModal} style={styles}>
                <div 
                className={imgUploaderBlock.uploaderModalInner} 
                ref={wrapperRef}
                style={innerStyles}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandlef(e)}>
                    <span className={imgUploaderBlock.close} onClick={modalOpener}>
                        <i className="icon-plus"></i>
                    </span>
                    <h2>Drag and drop or select the file you want</h2>
                    <img src={fileIcon} alt="" />
                    <span className={imgUploaderBlock.label}>Formats</span>
                    <div className={imgUploaderBlock.formats}>
                        <span>.png</span>
                        <span>.jpg</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgUploaderBlock