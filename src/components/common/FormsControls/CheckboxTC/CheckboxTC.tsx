import {FC} from "react";
import {WrappedFieldProps} from "redux-form";
import {Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps} from "@material-ui/core";


export const CheckboxTC: FC<WrappedFieldProps & CheckboxProps & FormControlLabelProps> = ({
                                                                                       input,
                                                                                       label
                                                                                   }) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={!!input.value}
                onChange={input.onChange}
                color='primary'
            />
        }
        label={label}
    />
);