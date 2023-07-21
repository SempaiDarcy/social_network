import {connect} from "react-redux";
import {Header} from "./Header";
import {Component} from "react";
import {logoutTC, setAuthTC} from "../../redux/auth-reducer";
import { UserType} from "../../redux/store";
import {StateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    user:UserType
}
type mapDispatchToPropsType = {
    setAuthTC:()=>void,
    logoutTC:()=>void
}
type ContentPropsType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends Component<ContentPropsType> {
    componentDidMount() {
      this.props.setAuthTC()
    }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        user:state.auth,
    }
}
export default connect (mapStateToProps,{setAuthTC,logoutTC})(HeaderContainer)