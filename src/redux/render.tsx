import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { addPost, state } from "./state";

// addPost("SamuraiJS.COM");
export const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
        <div style={{display:"flex",justifyContent:"center"}}><App state={state} addPost={addPost}/></div>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
