import { formatDistanceToNow } from 'date-fns';

class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    renderChat(data){
        const when = formatDistanceToNow(data.created_at.toDate(), { addSuffix: true });
        const html = `<div>
        <li class="list-group-item"><span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div><span class="time">${when}</span></div>
        </li>
        </div>`;

        this.list.innerHTML += html;
    }
}

export default ChatUI;