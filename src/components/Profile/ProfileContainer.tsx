import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfilePageType, setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

 class ProfileContainer extends React.Component<OwnPropsType> {



    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile state={this.props.state}/>
            </div>
        )

    }
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = {
    userId: string
}



type MapDispatchToPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void
}
type MapStateToPropsType = {
    state: ProfilePageType
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
     return {
         setUserProfile: (userProfile: UserProfileType) => {dispatch(setUserProfileAC(userProfile))}
     }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);