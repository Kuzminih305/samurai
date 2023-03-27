import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_IS_LOADING = "SET_IS_LOADING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        "small": string
        "large": string
    },
    status: null
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<number>

}


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 102,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}




export const usersReducer = (state: UsersPageType = initialState, action: ActionsType):UsersPageType  => {

    switch (action.type) {

        case FOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true}: el )}

        case UNFOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false}: el )}

        case SET_USERS :
            return {...state, users: action.users}

        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USER_COUNT :
            return {...state, totalUsersCount: action.totalCount}

        case SET_IS_LOADING :
            return {...state, isLoading:action.isLoading}

        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {...state, followingInProgress: action.followingInProgress
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)}

        default:
            return state;
    }
}

type ActionsType = FollowType
    | UnfollowType
    | SetUsersType
    | setCurrentPage
    | setTotalUsersCount
    | setFollowingInProgress
    | setIsLoading

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type setCurrentPage = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>
type setIsLoading = ReturnType<typeof setIsLoading>
type setFollowingInProgress = ReturnType<typeof setFollowingInProgress>

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    }as const
}
export  const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    }as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    }as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }as const
}
export const setIsLoading = (isLoading: boolean) => {
    return {
        type: SET_IS_LOADING,
        isLoading
    }as const
}
export const setFollowingInProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    }as const
}


//----------------THUNK------------------------


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setIsLoading(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => dispatch(setUsersAC(data.items)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}

export const getUserPageThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setIsLoading(true))
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => dispatch(setUsersAC(data.items)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}

export const userFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setFollowingInProgress(true, userId))
        followAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(followAC(userId))
            })
            .finally(() => dispatch(setFollowingInProgress(false, userId)))

    }
}

export const userUnFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setFollowingInProgress(false, userId))
        followAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(unfollowAC(userId))
            })
            .finally( () => dispatch(setFollowingInProgress(false, userId)))
    }
}