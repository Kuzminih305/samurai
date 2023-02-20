import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import {StoreType} from "../../redux/store";
import {addPostAC, updateNewPostMessageTextAC} from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type ProfilesPageType = {
    store: StoreType

}
const Profile = () => {



    return <div>
        <ProfileInfo/>
        <MyPostsContainer/>

    </div>
}
export default Profile;