import React, {FC} from "react";
import { useDispatch } from "react-redux";
import { submit } from "redux-form";
import { Button } from "@material-ui/core";

type ButtonSubmitProps = {
    form: any
}
export const ButtonSubmit: FC<ButtonSubmitProps> = ({form}) => {
    const dispatch = useDispatch();

    const onClickSubmit = () => {
        dispatch(submit(form));
    };

    return (
        <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={onClickSubmit}
        >
            Send
        </Button>
    );
};