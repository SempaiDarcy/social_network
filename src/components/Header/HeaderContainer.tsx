import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type PropsType = {
    setAuthUserData: (id: string, login: string, email:string) => void
    authUserData: AuthStateType
}

class HeaderContainer extends React.Component<PropsType,AuthStateType> {
    componentDidMount() {
        authAPI.me().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id,login,email)
            }
        })
    }

    render() {
        return <Header authUserData={this.props.authUserData}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        authUserData:state.auth
    }
}

export const HeaderConnect = connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

