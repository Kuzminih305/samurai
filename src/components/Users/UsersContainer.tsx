import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    getUserPageThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    setFollowingInProgress,
    setIsLoading,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userFollowThunkCreator,
    UsersType, userUnFollowThunkCreator,


} from "../../redux/users-reducer";


export type MyUsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<number>
}
type MapDispatchToProps = {
    followAC: (userID: number) => void
    unfollowAC: (userID: number) => void
    setUsersAC: (users: UsersType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    setIsLoading: (isLoading: boolean) => void
    setFollowingInProgress: (followingInProgress: boolean, userId: number) => void
     getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getUserPageThunkCreator: (currentPage: number, pageSize: number) => void
    userFollowThunkCreator: (userId: number) => void
    userUnFollowThunkCreator: (userId: number) => void

}


let mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress

    }
}


export default connect (mapStateToProps, {
    followAC,unfollowAC,setUsersAC
    ,setCurrentPageAC,setTotalUsersCountAC,
    setIsLoading,setFollowingInProgress,getUsersThunkCreator,
    getUserPageThunkCreator,userFollowThunkCreator,userUnFollowThunkCreator
}) (UsersAPIComponent)

