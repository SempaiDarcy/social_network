import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import nav from "./Navigation.module.css"
import messages from "./icons/messages.png"
import news from "./icons/news.png"
import profile from "./icons/profile.png"
import music from "./icons/music.png"
import settings from "./icons/settings.png"
import users from "./icons/users.png"
export const Navigation = () => {
  return (
      <nav className={s.nav}>
          <div className={s.item}>
              <img className={s.icons} src={profile} alt=""/>
              <NavLink className={s.link} to={"/profile"}> Profile</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={messages} alt=""/>
              <NavLink className={s.link} to={"/dialogs"}> Messages</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={users} alt=""/>
              <NavLink className={s.link} to={"/users"}> Users</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={news} alt=""/>
              <NavLink className={s.link} to={"/news"}> News</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={music} alt=""/>
              <NavLink className={s.link} to={"/music"}> Music</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={settings} alt=""/>
              <NavLink className={s.link} to={"/settings"}> Settings</NavLink>
          </div>
      </nav>
  );
};
