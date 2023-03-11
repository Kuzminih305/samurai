import React from 'react';
import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";

export type MyUsersPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToProps = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


let mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}
 let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userID: string) => {dispatch(followAC(userID))},
        unFollow: (userID: string) => {dispatch(unfollowAC(userID))},
        setUsers: (users: UsersType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
 }

export default connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent)

