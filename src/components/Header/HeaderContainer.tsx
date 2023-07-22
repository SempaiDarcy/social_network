import {connect} from "react-redux";
import {Header} from "./Header";
import {Component} from "react";
import {logoutTC} from "../../redux/auth-reducer";
import { UserType} from "../../redux/store";
import {StateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    user:UserType
}
type mapDispatchToPropsType = {
    logoutTC:()=>void
}
type ContentPropsType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends Component<ContentPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        user:state.auth,
    }
}
export default connect (mapStateToProps,{logoutTC})(HeaderContainer)