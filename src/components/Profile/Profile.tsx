import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    state: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo state={props.state}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;