import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.js';
import LinearProgress from "@material-ui/core/LinearProgress";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <LinearProgress variant="query"/>
    }

    return (
        <div className={s.profile_info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}
                     alt=""/>
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <div className={s.profile_info_desc}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default ProfileInfo;