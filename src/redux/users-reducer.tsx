

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

export type UsersType = {
    name: string
    "id": string
    "uniqueUrlName": null
    "photos": {
        "small": null
        "large": null
    },
    "status": null
    "followed": boolean
}

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1
}

        // {id: v1(), avatar: ava ,fullName: "Pasha.K", status: "I am a boss", followed: true, location: {city: "Minsk", country: "Belarus"} },
        // {id: v1(), avatar: ava, fullName: "Natasha.K", status: "I am a boss", followed: false, location: {city: "Kiev", country: "Ukraine"} },
        // {id: v1(), avatar: ava, fullName: "Tania.S", status: "I am a boss", followed: true, location: {city: "Krakov", country: "Poland"} }



export const usersReducer = (state: UsersPageType = initialState, action: ActionsType):UsersPageType  => {

    switch (action.type) {

        case FOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false}: el )}

        case UNFOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true}: el )}

        case SET_USERS :
            return {...state, users: action.users}

        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USER_COUNT :
            return {...state, totalUsersCount: action.totalCount}

        default:
            return state;
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType | setCurrentPage | setTotalUsersCount

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type setCurrentPage = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    }as const
}
export  const unfollowAC = (userID: string) => {
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