import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePageType, StoreType} from "../../redux/state";


type ProfilesPageType = {
    state: ProfilePageType
    addPost: (postText: string) => void

}
const Profile = (props:ProfilesPageType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}
                    addPost={props.addPost}/>
    </div>
}
export default Profile;