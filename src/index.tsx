import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const posts = [
  { id: 1, message: "Hi", likes: 1 },
  { id: 2, message: "How are u", likes: 2 },
  { id: 3, message: "I am fine", likes: 3 },
  { id: 4, message: "It is ok", likes: 4 },
];
const dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Viktor" },
  { id: 4, name: "Valera" },
];
ReactDOM.render(
  <BrowserRouter>
    <App posts={posts} dialogs={dialogs} />
  </BrowserRouter>,
  document.getElementById("root")
);
