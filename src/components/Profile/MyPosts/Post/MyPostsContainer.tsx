import React from 'react';
import MyPosts from "../MyPosts";
import {StoreType} from "../../../../redux/store";
import {addPostAC, updateNewPostMessageTextAC} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";

type MyPostContainerType = {
    store: StoreType
}


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const profilePageState = store.getState().profilePage
                const onAddPostAC = () => store.dispatch(addPostAC())
                const onUpdateNewPostMessageTextAC = (postMess: string) => store.dispatch(updateNewPostMessageTextAC(postMess))


                return <MyPosts profilePageState={profilePageState}
                                onAddPostAC={onAddPostAC}
                                onUpdateNewPostMessageTextAC={onUpdateNewPostMessageTextAC}/>
            }}
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;