import React from 'react';
import s from './FormsControls.module.css';

interface FormControlProps {
    children: React.ReactNode;
    meta: {
        touched: boolean;
        error: string;
    };
}

export const FormControl = ({ children, meta, ...props }: FormControlProps) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{children}</div>
            {hasError && <span className={s.error_span}>{meta.error}</span>}
        </div>
    );
};

interface TextareaProps {
    input: {
        value: string;
        onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    };
    meta: {
        touched: boolean;
        error: string;
    };
}

export const Textarea = ({ input, meta, ...props }: TextareaProps) => {
    return (
        <FormControl meta={meta} {...props}>
            <textarea className={s.error_textarea} {...input} {...props} />
        </FormControl>
    );
};

interface InputProps {
    input: {
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
    meta: {
        touched: boolean;
        error: string;
    };
}

export const Input = ({ input, meta, ...props }: InputProps) => {
    return (
        <FormControl meta={meta} {...props}>
            <input className={s.error_textarea} {...input} {...props} />
        </FormControl>
    );
};
// export const Textarea = ({ input, meta, ...props }:TextareaProps) => {// достаем деструктуризацией input meta и хотим все оставшиеся штуки оставить в props
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + ' '+ (hasError? s.error:'')}>
//             <div><textarea className={s.error_textarea} {...input} {...props} /></div>
//             { hasError && <span className={s.error_span}>{meta.error}</span>}
//         </div>
//     );
// };
// export const Input = ({ input, meta, ...props }:InputProps) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + ' '+ (hasError? s.error:'')}>
//             <div><input className={s.error_textarea} {...input} {...props} /></div>
//             { hasError && <span className={s.error_span}>{meta.error}</span>}
//         </div>
//     );
// }