import React, {useRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";




type arrPost = {
    postsData: PostsType[]
    addPost: (postText: string) => void

}

const MyPosts = (props: arrPost) => {

const postsElement = props.postsData.map(el =>
    (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))


    let postMessageRef = useRef<HTMLInputElement>(null)

    const addPost = () => {
    if (postMessageRef.current) {
        props.addPost(postMessageRef.current.value)
        postMessageRef.current.value = ''
    }
}


    return (
        <div>
            <div>
                <div className={s.post}>My posts:</div>
                <input ref={postMessageRef}></input>
                <button className={s.btn} onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>
    )
}
export default MyPosts;