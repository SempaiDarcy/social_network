import s from "./Header.module.css";
import app_icon from "../Navigation/icons/symbol.png"
export const Header = () => {
  return (
    <header className={`${s.header} ${s.rainHeader}`}>
        <img className={s.header_logo} src={app_icon} alt="App Icon"/>
        <h1 className={s.title}>SOCIAL NETWORK</h1>
    </header>
  );
};
