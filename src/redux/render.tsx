import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import {addPost, StateType} from "./state";

// addPost("SamuraiJS.COM");
type EntireTreeProps = {
    state:StateType
}
export const rerenderEntireTree = (props:EntireTreeProps) => {
  ReactDOM.render(
    <BrowserRouter>
        <div style={{display:"flex",justifyContent:"center"}}><App state={props.state} addPost={addPost}/></div>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
