import React from 'react';
import {MyUsersPropsType} from "./UsersContainer";
import classes from "./Usere.module.css";
import  axios from "axios";
import ava from "../img/avaBoy.jpg"


export class UsersC extends React.Component<MyUsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    //  getUsers = () => {
    //     if (this.props.usersPage.users.length === 0) {
    //         // props.setUsers([
    //         //         {
    //         //             id: v1(),
    //         //             avatar: ava,
    //         //             fullName: "Pasha.K",
    //         //             status: "I am a boss",
    //         //             followed: true,
    //         //             location: {city: "Minsk", country: "Belarus"}
    //         //         },
    //         //         {
    //         //             id: v1(),
    //         //             avatar: ava,
    //         //             fullName: "Natasha.K",
    //         //             status: "I am a boss",
    //         //             followed: false,
    //         //             location: {city: "Kiev", country: "Ukraine"}
    //         //         },
    //         //         {
    //         //             id: v1(),
    //         //             avatar: ava,
    //         //             fullName: "Tania.S",
    //         //             status: "I am a boss",
    //         //             followed: true,
    //         //             location: {city: "Krakov", country: "Poland"}
    //         //         }
    //         //     ]
    //         // )
    //
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }
    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.usersPage.users.map(el => {


                const onClickFollowHandler = () => {
                    this.props.follow(el.id)
                }
                const onClickUnFollowHandler = () => {
                    this.props.unFollow(el.id)
                }


                return (
                    <div className={classes.wrap} key={el.id}>
                        <div className={classes.ava_user}>
                            <div className={classes.avatar}>
                                <img src={ava} alt={''}/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button className={classes.btn_follow} onClick={onClickFollowHandler}>Follow</button>
                                    : <button className={classes.btn_unfollow} onClick={onClickUnFollowHandler}>Unfollow</button>}

                            </div>
                        </div>
                        <div className={classes.info_wrap}>
                            <div className={classes.userInfo}>
                                <div>{el.name}</div>
                                {/*<div>{el.status}</div>*/}
                            </div>
                        </div>
                        {/*<div className={classes.location}>*/}
                        {/*    <div>{"el.location.country"}</div>*/}
                        {/*    <div>{"el.location.city"}</div>*/}
                        {/*</div>*/}
                    </div>
                )})}
        </div>
    }
}