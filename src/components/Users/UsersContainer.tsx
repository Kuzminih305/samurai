import React from 'react';
import {connect} from "react-redux";
import {UsersC} from "./UsersC";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UsersType} from "../../redux/users-reducer";

export type MyUsersPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    usersPage: UsersPageType
}
type MapDispatchToProps = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}


let mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        usersPage: state.usersPage
    }
}
 let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userID: string) => {dispatch(followAC(userID))},
        unFollow: (userID: string) => {dispatch(unfollowAC(userID))},
        setUsers: (users: UsersType[]) => {dispatch(setUsersAC(users))}
    }
 }

export default connect (mapStateToProps, mapDispatchToProps) (UsersC)

