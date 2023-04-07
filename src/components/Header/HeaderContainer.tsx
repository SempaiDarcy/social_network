import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type PropsType = {
    setAuthUserData: (auth: AuthStateType) => void
    isAuth: boolean,
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

