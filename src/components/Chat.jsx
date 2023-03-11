import React, {useState} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {auth, db} from "../firebase-config.js"; // add document (row) into collection (table)

const Chat = (props) => {
    const {room} = props
    const [newMessage, setNewMessage] = useState('');

    const messagesRef = collection(db, 'messages')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(newMessage === "") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room
        });
        setNewMessage('')
    }

    return (
        <div className={'chat-app'}>
            <form onSubmit={handleSubmit} className={'new-message-form'}>
                <input
                    type="text"
                    className={'new-message-input'}
                    placeholder={'Type your message here...'}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button className={'send-button'} type={'submit'}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;