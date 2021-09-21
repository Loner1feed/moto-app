import React from 'react'
import profileLabel from './ProfileLabel.module.scss'
import profileImg from '../../../assets/img/profile-image.png'

export const ProfileLabel = () => {
    return (
        <div className={profileLabel.label}>
            <div className={profileLabel.img}>
                <img src={profileImg} alt="" />
            </div>

            <div className={profileLabel.text}>
                <h5>Anna</h5>
                <span>Anna1998@gmail.com</span>
            </div>
        </div>
    )
}

export default ProfileLabel;