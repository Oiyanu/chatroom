import Chatroom from "./app";
import ChatUI from "./ui";

const addForm = document.querySelector('.new-chat');


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const term = addForm.message.value.trim();
    chatroom.addChat(term)
    .then(() => addForm.reset())
    .catch(err => console.log(err.message));
});

const chatroom = new Chatroom('gaming', 'joshua');
chatroom.getChats((data) => {
    console.log(data);
});
