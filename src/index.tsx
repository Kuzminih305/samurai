import {StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/state";



export let renderTree = (store:StoreType) => {
    ReactDOM.render(
        <App store={store} addPost={store.addPost}/>,
        document.getElementById('root')
    );
}
renderTree(store)



