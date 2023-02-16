import React from 'react';
import './App.css';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {store, StoreType} from "./redux/state";



type AppPropsType = {
    store: StoreType
}




const App = (props: AppPropsType) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/Profile'} render={() => <Profile store={store}
                                                                    dispatch={props.store.dispatch.bind((props.store))}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs state={props.store._state.dialogPage}
                                                                    store = {store}
                                                                    dispatch={props.store.dispatch.bind((props.store))}/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
