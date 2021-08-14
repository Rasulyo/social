// import { rerenderEntireTree } from "../render";

let store = {
    rerenderEntireTree () {
        console.log('changeed')
    },
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: "Hi, How are you",
                    count: 15,
                    comments: 0
                },
                {
                    id: 2,
                    message: "It's my first props",
                    count: 15,
                    comments: 0
                }
            ],
            postText: "Расскажите что ни будь друзьям"
        },
        dialogPage: {
            dialogsData: [{
                    id: "1",
                    author: "Rasul",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                },
                {
                    id: "2",
                    author: "Arslan",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                },
                {
                    id: "3",
                    author: "Aktan",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                },
                {
                    id: "4",
                    author: "Tema",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                },
                {
                    id: "5",
                    author: "Temirlan",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                },
                {
                    id: "6",
                    author: "Emir",
                    img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                }
            ],
            messageData: [
                {
                    id: "1",
                    message: "Hello , How are you Bro"
                },
                {
                    id: "2",
                    message: "Hello , How are you Bro"
                },
                {
                    id: "3",
                    message: "Hello , How are you Bro"
                },
                {
                    id: "4",
                    message: "Hello , How are you Bro"
                },
                {
                    id: "5",
                    message: "Hello , How are you Bro"
                },
                {
                    id: "6",
                    message: "Hello , How are you Bro"
                }
            ],
            messageText: "Hello "
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: "Rasul",
                },
                {
                    id: 2,
                    name: "brkyzdyn",
                },
                {
                    id: 3,
                    name: "Suigonu  ",
                }
            ]
        }
    },
    getState(){
        return this._state;
    },
    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.postText,
            count: 0,
            comments: 0
        };
        
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.postText = ""
        this._rerenderEntireTree(this._state)
    },
    updatePostText (newPostText){
        this._state.profilePage.postText = newPostText
        this._rerenderEntireTree(this._state)
    },

    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogPage.messageText
        }
        this._state.dialogPage.messageData.push(newMessage)
        this._state.dialogPage.messageText = ''
        this._rerenderEntireTree(this._state)
    },
    
    updateMessage (newMessageText)  {
        this._state.dialogPage.messageText = newMessageText
        this._rerenderEntireTree(this._state)
    },
    
    subscribe(observer){
        this._rerenderEntireTree = observer
    }

}

export default store