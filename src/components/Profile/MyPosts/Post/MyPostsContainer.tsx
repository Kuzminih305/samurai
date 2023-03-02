import React from 'react';
import MyPosts from "../MyPosts";
import {addPostAC, ProfilePageType, updateNewPostMessageTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";



// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const profilePageState = store.getState().profilePage
//                 const onAddPostAC = () => store.dispatch(addPostAC())
//                 const onUpdateNewPostMessageTextAC = (postMess: string) => store.dispatch(updateNewPostMessageTextAC(postMess))
//
//
//                 return <MyPosts profilePageState={profilePageState}
//                                 onAddPostAC={onAddPostAC}
//                                 onUpdateNewPostMessageTextAC={onUpdateNewPostMessageTextAC}/>
//             }}
//         </StoreContext.Consumer>
//     )
// };
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    onAddPostAC: () => void
    onUpdateNewPostMessageTextAC: (postMess: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPostAC: () => {dispatch(addPostAC())},
        onUpdateNewPostMessageTextAC: (postMess: string) => {dispatch(updateNewPostMessageTextAC(postMess))}
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

