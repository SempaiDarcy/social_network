import React, {FC} from "react";
import {TextField, TextFieldProps} from "@material-ui/core";
import {WrappedFieldProps} from "redux-form";

export const TextareaFC: FC<WrappedFieldProps & TextFieldProps> = ({
                                                                       input,
                                                                       placeholder,
                                                                       variant,
                                                                       type,
                                                                       meta: {touched, error},
                                                                       ...custom
                                                                   }) => {
    return (
        <TextField {...input}
                   style={{marginBottom: '10px'}}
                   error={touched && error}
                   helperText={touched && error}
                   fullWidth
                   label={placeholder}
                   type={type}
                   variant={variant ? variant : 'outlined'}
                   size='small'/>
    )
}