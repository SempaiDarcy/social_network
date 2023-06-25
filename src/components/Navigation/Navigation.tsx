import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <NavLink to={"/profile"} activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/dialogs"} activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/news"}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/music"}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/settings"}>Settings</NavLink>
      </div>
    </div>
  );
};
