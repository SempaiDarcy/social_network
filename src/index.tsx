import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {store} from "./redux/store";
import "./index.css"
// addPost("SamuraiJS.COM");
const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <div style={{display:"flex",justifyContent:"center"}}>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}/></div>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree)