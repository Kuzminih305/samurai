import React from 'react';
import classes from "./Usere.module.css";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (currentPage: number) => void
    currentPage: number
    usersPage: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void

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

                    const onClickHandler = () => {
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
                                <NavLink to={'/profile/' + el.id}>
                                    <img src={el.photos.small} alt={''}/>
                                </NavLink>
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