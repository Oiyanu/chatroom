import { db, colRef, addDoc, Timestamp, onSnapshot } from './firebase';

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.unsub;
    }
    async addChat(message){
        try {
            const now = Timestamp.fromDate(new Date());
        await addDoc(colRef, {
            message: message,
            username: this.username,
            room: this.room,
            created_at: now
        });
            console.log("chat successfully added")
        } catch (error) {
            console.error(err.message);
        }
    }
    getChats(callback){
        onSnapshot(colRef, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            });
        });
    }
    updateRoom(room){
        this.room = room;
    }
    updateUser(username){
        this.username = username;
    }
}

export default Chatroom;