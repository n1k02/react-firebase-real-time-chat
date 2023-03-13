import React, {useState} from 'react';
import '../styles/Navbar.scss'
import {signOut} from 'firebase/auth'
import {store} from "../store/index.js";
import {observer} from "mobx-react";
import {auth} from "../firebase-config.js";


const Navbar = observer(() => {
    const {authCookie, userData} = store;
    const logout = async () => {
        await signOut(auth)
        authCookie.remove()
    }

    return (
        <div className={'navbar'}>
            <h2 className={'navbar__title'}>Firebase Chat</h2>
            <button onClick={logout} className={'navbar__button'}>LogOut</button>
            <div className={'navbar__profile-img'}>
                <img src={userData.currentUser?.photoURL} alt=""/>
            </div>
        </div>
    );
});

export default Navbar;