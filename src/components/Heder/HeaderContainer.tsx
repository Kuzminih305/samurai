import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthStatePropsType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                  this.props.setAuthUserData(response.data.data)
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
