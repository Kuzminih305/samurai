import React from 'react';
import classes from "./Usere.module.css";
import {UsersType,} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (currentPage: number) => void
    currentPage: number
    usersPage: UsersType[]
    userFollowThunkCreator: (userId: number) => void
    followingInProgress: Array<number>
    userUnFollowThunkCreator: (userId: number) => void
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
                        <span  className={props.currentPage === el ? classes.selectedPage : ""}
                              onClick={onClickHandler}>{el}</span>
                    )
                })}
            </div>

            {props.usersPage.map(el => {


                const onClickFollowHandler = () => props.userFollowThunkCreator(el.id)

                const onClickUnFollowHandler = () => props.userUnFollowThunkCreator(el.id)


                const buttonDisabled = props.followingInProgress.some(id => id === el.id)


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
                                    ? <button disabled={buttonDisabled}  className={classes.btn_unfollow}
                                              onClick={onClickUnFollowHandler}>Unfollow</button>
                                    : <button disabled={buttonDisabled}  className={classes.btn_follow}
                                          onClick={onClickFollowHandler}>Follow</button>}
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