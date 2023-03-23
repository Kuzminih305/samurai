import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileInfoThunkCreator,
    ProfilePageType,
    setUserProfileAC,
    UserProfileType
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

 class ProfileContainer extends React.Component<OwnPropsType> {



    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "166"
        }
        this.props.getUserProfileInfoThunkCreator(userId)
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
    setUserProfileAC: (userProfile: UserProfileType) => void
    getUserProfileInfoThunkCreator: (userId: string) => void
}
type MapStateToPropsType = {
    state: ProfilePageType
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        state: state.profilePage
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfileAC,getUserProfileInfoThunkCreator}) (WithUrlDataContainerComponent);