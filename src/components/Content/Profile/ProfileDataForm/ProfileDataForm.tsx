import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextareaFC} from "../../../common/FormsControls/TextareaTC/TextareaFC";
import {required} from "../../../../utils/validators/validators";
import {CheckboxTC} from "../../../common/FormsControls/CheckboxTC/CheckboxTC";
import {ButtonSubmit} from "../../../common/FormsControls/ButtonSubmit/ButtonSubmit";
import s from './ProfileDataForm.module.css'

export type ProfileDataFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormDataType>> = (props) => {
    const {handleSubmit, error} = props
    const model = {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
    }
    return <form onSubmit={handleSubmit} className={s.form}>
        {error && <div className={s.error}> { error } </div>}
        <Field placeholder='Full name'
               type='text'
               name='fullName'
               component={TextareaFC}
               validate={[required]}
        />
        <Field placeholder='About'
               type='text'
               name='aboutMe'
               component={TextareaFC}
               validate={[required]}
        />
        <Field type='checkbox'
               name='lookingForAJob'
               component={CheckboxTC}
               validate={[required]}
               label='Looking for a job'/>
        <Field placeholder='Skills'
               type='text'
               name='lookingForAJobDescription'
               component={TextareaFC}
        />
        {Object.keys(model).map(key => <Field placeholder={key}
                                              key={key}
                                              type='text'
                                              name={key}
                                              component={TextareaFC}
        />)}

        <ButtonSubmit form={ProfileDataForm}/>
    </form>
}
export const ProfileForm = reduxForm<ProfileDataFormDataType>({
    form: 'profileInfoForm'
})(ProfileDataForm)