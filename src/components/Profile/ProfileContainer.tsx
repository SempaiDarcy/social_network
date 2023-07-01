import {StoreContext} from "../../StoreContext";
import {Profile} from "./Profile";

export const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store)=>{
                return <Profile postData={store.getState().profilePage.posts} user={store.getState().user} dispatch={store.dispatch} newPostText={store.getState().profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>
    )
}