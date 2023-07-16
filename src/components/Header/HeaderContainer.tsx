import {connect} from "react-redux";
import {Header} from "./Header";
import {Component} from "react";
import {setAuthTC} from "../../redux/auth-reducer";
import {RootStateType, UserType} from "../../redux/store";


type mapStateToPropsType = {
    user:UserType
}
type mapDispatchToPropsType = {
    setAuthTC:()=>void
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
const mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        user:state.auth,
    }
}
export default connect (mapStateToProps,{setAuthTC})(HeaderContainer)