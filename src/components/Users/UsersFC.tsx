import React, {MouseEvent} from 'react';
import classes from "./Usere.module.css";
import ava from "../img/avaBoy.jpg";
import {UsersType} from "../../redux/users-reducer";


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (currentPage: number) => void
    currentPage: number
    usersPage: UsersType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void

}


const UsersFC = (props: UsersFCPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(el => {

                    const onClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
                        props.onPageChanged(el)
                    }

                    return (
                        <span className={props.currentPage === el ? classes.selectedPage : ""}
                              onClick={onClickHandler}>{el}</span>
                    )
                })}
            </div>

            {props.usersPage.map(el => {


                const onClickFollowHandler = () => {
                    props.follow(el.id)
                }
                const onClickUnFollowHandler = () => {
                    props.unFollow(el.id)
                }


                return (
                    <div className={classes.wrap} key={el.id}>
                        <div className={classes.ava_user}>
                            <div className={classes.avatar}>
                                <img src={ava} alt={''}/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button className={classes.btn_follow}
                                              onClick={onClickFollowHandler}>Follow</button>
                                    : <button className={classes.btn_unfollow}
                                              onClick={onClickUnFollowHandler}>Unfollow</button>}
                            </div>
                        </div>
                        <div className={classes.info_wrap}>
                            <div className={classes.userInfo}>
                                <div>{el.name}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default UsersFC;