import './styles/App.scss'
import {Auth} from "./components/Auth.jsx";
import {useRef} from "react";

import RoomsList from "./components/RoomsList.jsx";
import {store} from "./store/index.js";
import {observer} from "mobx-react";
import Chat from "./components/Chat.jsx";
import CleanChat from "./components/CleanChat.jsx";
import Navbar from "./components/Navbar.jsx";

const App = observer(() => {
    const {isAuth, activeRoomId} = store;

    const roomInputRef = useRef(null)

    if (!isAuth) {
        return <Auth/>
    }
    return (
        <div className={'App'}>
            <Navbar/>
            <div className={'App__row row'}>
                <RoomsList/>
                {activeRoomId ? <Chat/> : <CleanChat/>}
            </div>
        </div>

        // <div>
        //     {room ? <Chat room={room}/>
        //         : <div className={'room'}>
        //             <label>Enter Room Name:</label>
        //             <input type="text" ref={roomInputRef}/>
        //             <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        //         </div>
        //     }
        // </div>
    )
});

export default App;

