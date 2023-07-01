import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, RootStateType} from "../../redux/store";
import {DispatchType} from "../../redux/redux-store";



const mapStateToProps = (state:RootStateType) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch:DispatchType) => {
    return {
        sendMessage:(message:string) => dispatch(addMessageAC(message))
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)