let rerenderEntireTree = () => {
    console.log("state change")
}
let state = {
    profilePage: {
        posts:[
        {id:1 , message: "Hi, how are you?" , likescount:"20"},
        {id:2 , message: "it's my first post" , likescount:"35"},
        ],
        newPostText: 'Hello'
      
    }
    ,
    dialogsPage:{
        messages:[
        {id:1 , message: "Hello"},
        {id:2 , message: "yes"},
        {id:3 , message: "no"},
        {id:4 , message: "how are you"},
        {id:5 , message: "Hello"}
        ],

          dialogs: [
        {id:1 , name: "Vitya"},
        {id:2 , name: "Aleksandr"},
        {id:3 , name: "Andrey"},
        {id:4 , name: "Dima"},
        {id:5 , name: "Kirill"}
        ],
    }
    
    
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likescount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (NewText) => {
    state.profilePage.newPostText = NewText
    rerenderEntireTree(state);
}

export default state;