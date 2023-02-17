import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, StoreType} from "../../../redux/state";
import {addPostAC, updateNewPostMessageTextAC} from "../../../redux/profile-reducer";


type arrPost = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void

}


const MyPosts = (props: arrPost) => {

    const postsElement = props.store._state.profilePage.postsData.map(el =>
        (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))


    const newMessagePost = props.store._state.profilePage.newPostText;

    const onClickHandler = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let postText = e.currentTarget.value
        props.dispatch(updateNewPostMessageTextAC(postText))
    }


    return (
        <div>
            <div>
                <div className={s.post}>My posts:</div>
                <input
                    type={"text"}
                    value={newMessagePost}
                    onChange={onChangeHandler}
                />
                <button className={s.btn} onClick={onClickHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;