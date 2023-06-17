import { Header } from "./components/Header/Header";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Switch } from "react-router-dom";
import { StateType } from "./redux/state";

type AppPropsType = {
  state: StateType;
  addPost: (message: string) => void;
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
            render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} />}
          />
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
