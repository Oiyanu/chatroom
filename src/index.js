import Chatroom from "./app";
import ChatUI from "./ui";

const addForm = document.querySelector('.new-chat');
const room = document.querySelector('.chat-rooms');
const list = document.querySelector('.chat-list');

room.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatui.clear();
    }
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(data => chatui.renderChat(data));
});


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const term = addForm.message.value.trim();
    chatroom.addChat(term)
    .then(() => addForm.reset())
    .catch(err => console.log(err.message));
});

const chatui = new ChatUI(list);
const chatroom = new Chatroom('gaming', 'joshua');
chatroom.getChats((data) => {
    console.log(data);
});
