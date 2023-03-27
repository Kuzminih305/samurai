import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthStatePropsType, getAuthUserDataThunkCreator} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderPropsType> {


    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export type HeaderPropsType = SetAuthPropsType & MapStateToPropsType
type SetAuthPropsType = {
    getAuthUserDataThunkCreator: () => void
}

type MapStateToPropsType = {
   authState: AuthStatePropsType
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        authState: state.auth
    }
}

export default connect (mapStateToProps, {getAuthUserDataThunkCreator}) (HeaderContainer)
