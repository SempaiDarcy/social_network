import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

type DialogPropsType = {
  id: number;
  name: string;
};

export const Dialog = (props: DialogPropsType) => {
  return (
    <div>
      <div className={s.dialog + " " + s.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  );
};
