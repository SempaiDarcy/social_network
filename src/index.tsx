import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {RootStateType, store} from "./redux/store";
// addPost("SamuraiJS.COM");
const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <div style={{display:"flex",justifyContent:"center"}}>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}/></div>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)