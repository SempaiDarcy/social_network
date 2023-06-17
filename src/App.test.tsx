import ReactDOM from "react-dom";
import MainApp from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MainApp
      state={{
        profilePage: {
          posts: [],
        },
        dialogsPage: {
          dialogs: [],
        },
        sidebar: {},
      }}
      addPost={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
