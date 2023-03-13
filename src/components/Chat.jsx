import React, {useEffect, useState} from 'react';
import {addDoc} from 'firebase/firestore'
import {auth} from "../firebase-config.js";
import {store} from "../store/index.js";
import {observer} from "mobx-react";
import '../styles/Chat.scss'
import Message from "./Message.jsx";
import {getMessages, messagesRef} from "../API/getMessages.api.js";

const Chat = observer(() => {
    const {currentRoom, addMessage, getMessagesByRoom, messages} = store;
    const [newMessage, setNewMessage] = useState('');


    // listen to the messages
    useEffect(() => {
        getMessages()
    }, [ currentRoom]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newMessage === "") return;
        const date = new Date();
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt:String(new Date(date.valueOf() + date.getTimezoneOffset())),
            user: auth.currentUser.displayName,
            userPhotoURL: auth.currentUser?.photoURL, // правильнее было-бы создать отдельную таблицу пользователей в которой пользователь создается при входе и засунуть туда картинку, но мне лень
            room: currentRoom.name
        }); // еще надо было добавить уникальный идентификатор чтоб отличать сообщения по нему, а не по имени, но мне опять лень
        setNewMessage('')
    }

    return (
        <div className={'chat'}>
            <div className={'chat__header'}>
                <h3>{currentRoom?.name?.toUpperCase()}</h3>
            </div>

            <div className={'chat__messages-block'}>
                {getMessagesByRoom(currentRoom.name).map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <form onSubmit={handleSubmit} className={'new-message-form'}>
                <input
                    type="text"
                    className={'new-message-form__input'}
                    placeholder={'Type your message here...'}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button className={'new-message-form__send-button'} type={'submit'}>
                    Send
                </button>
            </form>
        </div>
    );
});

export default Chat;