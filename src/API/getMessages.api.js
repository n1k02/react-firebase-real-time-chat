import {collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../firebase-config.js";
import {store} from "../store/index.js";

export const messagesRef = collection(db, 'messages')

export const getMessages = () => {
    const {currentRoom, addMessage} = store;
    const queryMessages = query( // get messages only from this room
        messagesRef,
        where('room', '==', currentRoom.name),
        orderBy('createdAt')
    )
    onSnapshot(queryMessages, (snapshot) => {
        snapshot.forEach((doc) => {
            addMessage({...doc.data(), id: doc.id})
        })
    })
}