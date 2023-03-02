import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./Post/MyPostsContainer";

const MyPosts = (props: MyPostsPropsType) => {
    const postsElement = props.profilePage.postsData.map(el =>
        (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    const newMessagePost = props.profilePage.newPostText;

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
                <input className={s.inp}
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