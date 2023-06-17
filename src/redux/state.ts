import {rerenderEntireTree} from "./render";

export const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likes: 12 },
      { id: 2, message: "Hi, how are you?", likes: 11 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Viktor" },
      { id: 4, name: "Valera" },
    ],
  },
  sidebar: {},
};

export const addPost = (postMessage: string) => {
  debugger;
  let newPost = {
    id: 6,
    message: postMessage,
    likes: 33,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree()
};
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

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};
