

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

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
}


let initialState = {
    users: [
        // {id: v1(), avatar: ava ,fullName: "Pasha.K", status: "I am a boss", followed: true, location: {city: "Minsk", country: "Belarus"} },
        // {id: v1(), avatar: ava, fullName: "Natasha.K", status: "I am a boss", followed: false, location: {city: "Kiev", country: "Ukraine"} },
        // {id: v1(), avatar: ava, fullName: "Tania.S", status: "I am a boss", followed: true, location: {city: "Krakov", country: "Poland"} }
    ]
}



export const usersReducer = (state: UsersPageType = initialState, action: ActionsType):UsersPageType  => {

    switch (action.type) {

        case FOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false}: el )}

        case UNFOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true}: el )}

        case SET_USERS :
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>


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