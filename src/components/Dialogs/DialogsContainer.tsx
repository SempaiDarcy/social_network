import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {addMessageAC} from "../../redux/dialogs-reducer";



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
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)