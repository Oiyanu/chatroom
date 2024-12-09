import Chatroom from "./app";

const chatroom = new Chatroom('gaming', 'joshua');
chatroom.getChats((data) => {
    console.log(data);
});
