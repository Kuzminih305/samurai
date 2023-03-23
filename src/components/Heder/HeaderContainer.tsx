import React from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {AuthStatePropsType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderPropsType> {


    componentDidMount() {
        authAPI.authMy().then(data => {
                  this.props.setAuthUserData(data.data)
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export type HeaderPropsType = SetAuthPropsType & MapStateToProps
type SetAuthPropsType = {
    setAuthUserData: (data: AuthStatePropsType) => void
}

type MapStateToProps = {
   authState: AuthStatePropsType
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        authState: state.auth
    }
}

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)
