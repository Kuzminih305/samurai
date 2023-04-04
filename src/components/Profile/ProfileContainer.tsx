import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getUserProfileInfoThunkCreator,
    ProfilePageType, updateProfileStatusThunkCreator,
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";



 class ProfileContainer extends React.Component<OwnPropsType> {



    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "28176"
        }
        this.props.getUserProfileInfoThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
    }


     render() {
         return (
             <div>
                 <Profile state={this.props.state}
                          status={this.props.status}
                          updateProfileStatusThunkCreator={this.props.updateProfileStatusThunkCreator}/>
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
    getUserProfileInfoThunkCreator: (userId: string) => void
    getProfileStatusThunkCreator: (userId: string) => void
    updateProfileStatusThunkCreator: (status: string) => void
}
type MapStateToPropsType = {
    state: ProfilePageType
    status: string
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        state: state.profilePage,
        status: state.profilePage.status
    }
}

export default compose<ComponentType>(
    connect (mapStateToProps, {getUserProfileInfoThunkCreator,getProfileStatusThunkCreator,updateProfileStatusThunkCreator}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default WithAuthRedirect (connect (mapStateToProps, {getUserProfileInfoThunkCreator}) (WithUrlDataContainerComponent));