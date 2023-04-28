import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {stateType} from "../bll/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>)  {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}