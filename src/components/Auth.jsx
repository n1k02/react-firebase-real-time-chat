import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import '../styles/Auth.scss'
import {store} from "../store/index.js";
import {observer} from "mobx-react";


export const Auth = observer(() => {
    const {authCookie} = store;
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider); // console.log(result)
            await authCookie.set(result.user.refreshToken)
        } catch (err) {
            console.error(err);
        }
    }
    return <div className={'auth'}>
        <div className={'auth__card'}>
            <div className={'auth__title'}>Sign In With Google To Continue</div>
            <button className={'auth__btn'} onClick={signInWithGoogle}> Sign In With Google</button>
        </div>
    </div>
})