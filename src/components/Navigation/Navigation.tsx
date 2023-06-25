import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import nav from "./Navigation.module.css"
import messages from "./icons/messages.png"
import news from "./icons/news.png"
import profile from "./icons/profile.png"
import music from "./icons/music.png"
import settings from "./icons/settings.png"
export const Navigation = () => {
  return (
      <nav className={s.nav}>
          <div className={s.item}>
              <img className={s.icons} src={profile}/>
              <NavLink className={s.link} to={"/profile"}> Profile</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={messages}/>
              <NavLink className={s.link} to={"/dialogs"}> Messages</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={news}/>
              <NavLink className={s.link} to={"/news"}> News</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={music}/>
              <NavLink className={s.link} to={"/music"}> Music</NavLink>
          </div>
          <div className={s.item}>
              <img className={s.icons} src={settings}/>
              <NavLink className={s.link} to={"/settings"}> Settings</NavLink>
          </div>
      </nav>
  );
};
