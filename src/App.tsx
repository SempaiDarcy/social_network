import { Header } from "./components/Header/Header";
import "./App.css";
import { Navbar } from "./components/Profiles/Navbar";
import wall from "./images/wall.jpg";
const App = () => {
  return (
    <div className="app-wrapper">
      <div className="header">
        <Header />
      </div>
      <nav className="nav">
        <Navbar />
      </nav>
      <div className="content">Wall picture</div>
    </div>
  );
};

export default App;
