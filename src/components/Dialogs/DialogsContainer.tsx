import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {compose} from "redux";
import {ComponentType} from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



const mapStateToProps = (state:StateType) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch:DispatchType) => {
    return {
        sendMessage:(message:string) => dispatch(addMessageAC(message))
    }
}
export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)