export let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likes: 12},
        {id: 2, message: "Hi, how are you?", likes: 11},
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Valera"},
      ],
    },
    sidebar: {},
  },
  getState() {
    debugger
    return this._state
  },
  rerenderEntireTree(state:RootStateType) {
    console.log("state changed")
  },
  addPost (postMessage: string)  {
    debugger
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likes: 33,
    };
    // state.profilePage.posts.push(newPost);
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this.rerenderEntireTree(this._state)
  },
  subscribe (callback:(state:RootStateType)=>void){
    this.rerenderEntireTree = callback
  }
}

export type PostType = {
  id: number;
  message: string;
  likes: number;
};

export type DialogType = {
  id: number;
  name: string;
};

export type ProfilePageType = {
  posts: PostType[];
};

export type DialogsPageType = {
  dialogs: DialogType[];
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};
// @ts-ignore
window.store = store