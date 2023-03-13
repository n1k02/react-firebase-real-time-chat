import {action, computed, makeAutoObservable, makeObservable, observable, toJS} from "mobx";
// import {cookies} from "../API/cookies.api.js";
import Cookie from 'mobx-cookie'


class Store {
    userData = {
        currentUser: {
            photoURL:'123'
        }
    };
    authCookie = new Cookie('auth-token')
    rooms = [
        {id: 1, name: 'room1'},
        {id: 2, name: 'room2'},
        {id: 3, name: 'room3'},
    ]
    activeRoomId = 1;  // active room's id
    messages = [
        // {
        //     user: "NIK_02",
        //     createdAt: new Date().toLocaleString(),
        //     room: "room1",
        //     text: "soso",
        //     id: "mCn1bMdZkcx6zWi4t00S"
        // }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setUserData = (data) => {
        this.userData = data;
    }

    setActiveRoom = (id) => {
        this.activeRoomId = id;
    }
    addMessage = (message) => {

        for(let m of toJS(this.messages)) {
            if(m.id === message.id) {
                return;
            }
        }
        this.messages.push(message)
    }

    get isAuth() {
        return this.authCookie.value;
    }

    get currentRoom() {
        if (!this.activeRoomId) {
            return null;
        }
        let room;
        this.rooms.forEach(r => {
            if (r.id === this.activeRoomId) {
                room = r;
            }
        })
        return room;
    }

    getMessagesByRoom = (roomId) => {
        return this.messages.filter(m=> {
            if(toJS(m).room === roomId) {
                return toJS(m);
            }
        })
    }




}

export const store = new Store();

// autorun(()=> {
//     store.isAuth = store.cookie.value;
//     console.log('run')
// })

