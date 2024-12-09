import { db, colRef, addDoc, Timestamp } from './firebase';

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
}

export default Chatroom;