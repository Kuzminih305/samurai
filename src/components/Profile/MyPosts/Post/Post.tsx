import React from "react";
import s from "./Post.module.css";
import Photo from '../../../img/photo_2022-07-09_11-29-57.jpg'


type PostPropsType = {
    message: string | number | symbol
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src={Photo} alt=""/>
                <p className={s.massage}>{props.message}</p>
            </div>
            <div className={s.like}>
                <p>Likes: {props.likesCount}</p>
            </div>

        </div>
    )
}

export default Post;