import {v1} from "uuid";
import {path} from "../components/Constans/Constans";
import {NavbarType} from "../components/Navbar/Navbar";


let initialState = {
        sidebar: [
            {id: v1(), path: path.PROFILE, title: 'Profile'},
            {id: v1(), path: path.DIALOGS, title: 'Messages'},
            {id: v1(), path: path.NEWS, title: 'News'},
            {id: v1(), path: path.MUSIC, title: 'Music'},
            {id: v1(), path: path.SETTINGS, title: 'Settings'},
        ],
        friends: {
            title: 'Friends',
            imgFriends: [
                {
                    id: 1,
                    img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                    err: 'Error'
                },
                {
                    id: 2,
                    img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                    err: 'Error'
                },
                {
                    id: 3,
                    img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                    err: 'Error'
                }
            ]
        }
    }

const navbarReducer = (state: NavbarType = initialState, action: any): NavbarType => {
    return state
}

export default navbarReducer