import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    state: ProfilePageType
    status: string
    updateProfileStatusThunkCreator: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo state={props.state}
                     status={props.status}
                     updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;