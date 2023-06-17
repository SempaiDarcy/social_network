import s from "./Dialogs.module.css";
import { Dialog } from "./Dialog/Dialog";
import { DialogsType } from "../../App";
type DialogsPropsType = {
  dialogs: DialogsType[];
};
export const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {props.dialogs.map((el) => {
          return <Dialog id={el.id} name={el.name} />;
        })}
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How a u</div>
        <div className={s.message}>I am fine</div>
      </div>
    </div>
  );
};
