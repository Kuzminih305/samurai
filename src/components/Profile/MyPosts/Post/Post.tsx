import React from "react";
import s from "./Post.module.css";


type PostPropsType = {
    message: string | number | symbol
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU"
             alt=""/>
        <h2>{props.message}</h2>
        <div>
            <h2>Likes: {props.likesCount}</h2>
        </div>
    </div>
}

export default Post;