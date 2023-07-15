import {connect} from "react-redux";
import {Header} from "./Header";
import {Component} from "react";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType, UserType} from "../../redux/store";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = {
    user:UserType
}
type mapDispatchToPropsType = {
    setAuthUserData:(userId:string,email:string,login:string)=>void
}
type ContentPropsType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends Component<ContentPropsType> {
    componentDidMount() {
       usersAPI.getAuth().then((data)=>{
            if(data.resultCode===0) {
                let {id,login,email} = data.data
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