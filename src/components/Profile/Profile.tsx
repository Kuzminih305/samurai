import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilesPageType = {
    state: ProfilePageType
}
const Profile = (props:ProfilesPageType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}/>
    </div>
}
export default Profile;