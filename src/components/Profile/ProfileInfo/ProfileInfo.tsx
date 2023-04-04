import React from "react";
import classes from "./ProfileInfo.module.css";
import Phone from "../../img/stock-photo-abstract-grey-orange-polygonal-background.jpg";
import {ProfilePageType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import myAvatar from "../../img/photo_2022-07-09_11-29-57.jpg"
import ProfileStatus from "./ProfileStatus/profileStatus";

type ProfileInfoPropsType = {
    state: ProfilePageType
    status: string
    updateProfileStatusThunkCreator: (status: string) => void
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.state) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className={classes.phone}>
                <img src={Phone} alt=""/>
            </div>
            <div className={classes.avatarInfo}>
                <div className={classes.avatar}>
                    <img src={props.state.userProfile?.photos.large
                        ? props.state.userProfile.photos.large
                        : myAvatar} alt=""/>

                </div>
                <div>
                    <h2>{props.state.userProfile?.fullName}</h2>
                    <p>{props.state.userProfile?.aboutMe}</p>
                    <ProfileStatus status={props.status}
                                   updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}/>
                </div>

            </div>
            <div>
            </div>
        </div>
    )
}
export default ProfileInfo;