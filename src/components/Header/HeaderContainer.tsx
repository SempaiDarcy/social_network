import {connect} from "react-redux";
import {Header} from "./Header";
import {Component} from "react";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType, UserType} from "../../redux/store";

type mapStateToPropsType = {
    user:UserType
}
type mapDispatchToPropsType = {
    setAuthUserData:(userId:string,email:string,login:string)=>void
}
type ContentPropsType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends Component<ContentPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials:true
        }).then((res)=>{
            if(res.data.resultCode===0) {
                let {id,login,email} = res.data.data
                this.props.setAuthUserData(id,email,login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        user:state.auth,
    }
}
export default connect (mapStateToProps,{setAuthUserData})(HeaderContainer)