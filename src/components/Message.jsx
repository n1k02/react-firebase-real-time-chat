import React from 'react';
import {toJS} from "mobx";
import {store} from "../store/index.js";
import '../styles/Message.scss'

const Message = (props) => {
    const {userData} = store
    const date = new Date(props.message.date)
    return (
        <div className={`message ${props.message.user === userData.currentUser.displayName ? 'me' : ''}`}>
            <div className={'message__img circle-image'}>
                <img src={props.message.userPhotoURL} alt=""/>
            </div>
            <div className={'message__content-block'}>
                <div className={'message__user'}>{props.message.user}</div>
                <div className={'message__text'}>{props.message.text}</div>
            </div>
            <div className={'message__date'}>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        </div>
    );
};

export default Message;