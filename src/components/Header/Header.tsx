import s from "./Header.module.css";
import app_icon from "../../images/symbol.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/store";
type HeaderPropsType = {
    user:UserType
}
export const Header = (props:HeaderPropsType) => {
  return (
    <header className={s.header} >
        <div className={s.header_left}>
            <img className={s.header_logo} src={app_icon} alt="App Icon"/>
            <h1 className={s.title}>SOCIAL NETWORK</h1>
        </div>
        <div className={s.header_right}>
            {props.user.isAuth?<NavLink to={'/auth'} className={s.login_block}>{props.user.login}</NavLink>:"Авторизация"}

        </div>
    </header>
  );
};
