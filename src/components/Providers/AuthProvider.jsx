import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../../firebase/firebase.init';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // const user = {
    //     displayName : " Al katra"
    // }
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

   /* Observe state auth change */
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;