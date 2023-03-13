import React from 'react';
import '../styles/RoomList.scss'
import {store} from "../store/index.js";
import RoomListItem from "./RoomListItem.jsx";
import {observer} from "mobx-react";
import '../styles/RoomList.scss'

const RoomsList = observer(() => {
    const {rooms} = store
    return (
        <div className={'rooms-list'}>
            <h3 className={'rooms-list__title'}>Rooms</h3>
            {rooms.map((room) => (
                <RoomListItem
                    id={room.id}
                    name={room.name}
                    key={room.id}
                />
            ))}
                <button className={'rooms-list__add-button'}>Add new Room</button>
        </div>
    );
});

export default RoomsList;