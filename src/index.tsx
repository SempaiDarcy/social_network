import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import './index.css'
import React from "react";
import {Provider} from "react-redux";
const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <App/>
                </div>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree)