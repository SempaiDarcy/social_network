import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {DispatchType, StateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: DispatchType)=> {
    return {
        sendMessage: (message: string) => dispatch(addMessageAC(message))
    }
}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)