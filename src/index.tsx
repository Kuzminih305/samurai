import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {AddPostActionType, store, StoreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";





export let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter> ,document.getElementById('root'));
}



store.subscribe(renderTree)
renderTree()




