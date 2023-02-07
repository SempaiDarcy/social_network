export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    message: string
}


export type StateType = {
    profilePage: {
        posts: PostsType[]

    }
    dialogsPage: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
}
export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 23},
            {id: 2, message: "It is my first post", likesCount: 11},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Walter Wait'},
            {id: 2, name: 'Jesse Pinkman'},
            {id: 3, name: 'Hank Schreider'},
            {id: 4, name: 'Soul Goodman'},
        ],
        messages: [
            {message: 'Hi'},
            {message: 'How are you?'},
            {message: 'I am fine'}]
    }

}