import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, store, StoreType} from "../../redux/state";


type ProfilesPageType = {
    store: StoreType
    dispatch: (action: AddPostActionType) => void

}
const Profile = (props:ProfilesPageType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts store={store}
                 dispatch={props.store.dispatch.bind((props.store))}/>
    </div>
}
export default Profile;