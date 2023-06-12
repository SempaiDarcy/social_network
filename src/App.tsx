import { Header } from "./components/Header/Header";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Switch } from "react-router-dom";

type AppPropsType = {
  posts: PostType[];
  dialogs: DialogsType[];
};
export type PostType = {
  id: number;
  message: string;
  likes: number;
};
export type DialogsType = {
  id: number;
  name: string;
};

const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <MyPosts /> */}
      <div className="app-wrapper-content">
        <Switch>
          <Route
            path={"/dialogs"}
            render={() => <Dialogs dialogs={props.dialogs} />}
          />
          <Route
            path={"/profile"}
            render={() => <Profile posts={props.posts} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
