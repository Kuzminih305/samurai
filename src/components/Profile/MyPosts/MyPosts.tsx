import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";



type arrPost = {
    postsData: PostsType[]
}

const MyPosts = (props: arrPost) => {

const pastsElement = props.postsData.map(el =>
    (<Post message={el.message} likesCount={el.likesCount}/>))


    return (
        <div>
            <div>
                <div className={s.post}>My posts:</div>
                <div>
                    <textarea placeholder="Send Massage" cols={30} rows={5}></textarea>
                </div>
                <div>
                    <button className={s.btn}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {pastsElement}



                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>
    )
}
export default MyPosts;