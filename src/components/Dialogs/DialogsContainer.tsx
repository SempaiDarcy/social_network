import React from 'react';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <Dialogs dialogsData={store.getState().dialogsPage.dialogs}
                                messagesData={store.getState().dialogsPage.messages}
                                dispatch={store.dispatch}/>
            }}
        </StoreContext.Consumer>)
}