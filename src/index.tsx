import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {addPost, RootStateType, state, subscribe} from "./redux/state";
import App from "./App";

// addPost("SamuraiJS.COM");
const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <div style={{display:"flex",justifyContent:"center"}}><App state={state} addPost={addPost}/></div>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)