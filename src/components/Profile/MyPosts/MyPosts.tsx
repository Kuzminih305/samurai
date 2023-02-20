import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";



type arrPost = {
    profilePageState: ProfilePageType
    onAddPostAC: () => void
    onUpdateNewPostMessageTextAC: (postMess: string) => void
}


const MyPosts = (props: arrPost) => {

    const postsElement = props.profilePageState.postsData.map(el =>
        (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    const newMessagePost = props.profilePageState.newPostText;

    const onClickHandler = () => {
        props.onAddPostAC()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let postText = e.currentTarget.value
        props.onUpdateNewPostMessageTextAC(postText)
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