import React from 'react';
import './App.css';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import classes from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/state";
// import {addPost} from "./redux/state";


type AppPropsType = {
    // state: StateType
    store: StoreType
    addPost: (postText: string) => void
}




const App = (props: AppPropsType) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/Profile'} render={ () => <Profile state={props.store._state.profilePage}
                                                                        addPost={props.addPost}/> }/>
                    <Route path={'/Dialogs'} render={ () => <Dialogs state={props.store._state.dialogPage}/> }/>
                    <Route path={'/News'} render={ () => <News/> }/>
                    <Route path={'/Music'} render={ () => <Music/> }/>
                    <Route path={'/Settings'} render={ () => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;