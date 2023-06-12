import { Header } from "./components/Header/Header";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Router } from "react-router-dom";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <MyPosts /> */}
      <div className="app-wrapper-content">
        <Route path={"/dialogs"} render={() => <Dialogs />} />
        <Route path={"/profile"} render={() => <Profile />} />
      </div>
    </div>
  );
};

export default App;
