import React from 'react';
import {store} from "../store/index.js";
import '../styles/RoomListItem.scss'
import {observer} from "mobx-react";

const RoomListItem = observer((props) => {
    const {setActiveRoom, activeRoomId} = store;

    return (
        <div
            className={`room-list-item ${props.id === activeRoomId? 'active':''}`}
            onClick={()=> setActiveRoom(props.id)}
        >
            {props.name}
        </div>
    );
});

export default RoomListItem;