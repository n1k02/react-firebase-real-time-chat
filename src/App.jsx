import './App.css'
import {Auth} from "./components/Auth.jsx";
import {useRef, useState} from "react";

import Cookies from "universal-cookie/lib";
import Chat from "./components/Chat.jsx";

const cookies = new Cookies();

function App() {
    const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
    const [room, setRoom] = useState('')
    const roomInputRef = useRef(null)

    if (!isAuth) {
        return <Auth setIsAuth={setIsAuth}/>
    }
    return (
        <div>
            {room ? <Chat room={room}/>
                : <div className={'room'}>
                    <label>Enter Room Name:</label>
                    <input type="text" ref={roomInputRef}/>
                    <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
                </div>
            }
        </div>
    )
}

export default App
