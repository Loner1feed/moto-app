import React from 'react'
import Button from '../Button/Button';
import Navbar from './Navbar/Navbar';
import ProfileLabel from './ProfileLabel/ProfileLabel';
import sidebar from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={sidebar.sidebar}>
            <ProfileLabel/>
            <Navbar/>
            <Button text="My Shop" icon="icon-btn-shop"/>
        </div>
    )
}

export default Sidebar;