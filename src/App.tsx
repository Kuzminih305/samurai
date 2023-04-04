import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Heder/HeaderContainer";
import Login from "./components/Login/login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";








const App = () => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/Dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainer/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
    );
}

export default App;
