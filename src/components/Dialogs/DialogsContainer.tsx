import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs";
import {AppDispatchType, stateType} from "../../bll/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {getDialogsData, getMessagesData} from "../../bll/selectors/dialogsSelectors";
import {addMessageAC} from "../../bll/reducers/dialogsReducer";

type MapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsData: getDialogsData(state),
        messagesData: getMessagesData(state),
    }
}
let mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => dispatch(addMessageAC(message))
    }
}
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)