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
        <li class="list-group-item"><span>${data.username}</span>
        <span>${data.message}</span>
        <span>${when}</span>
        </li>
        </div>`;

        this.list.innerHTML += html;
    }
}

export default ChatUI;