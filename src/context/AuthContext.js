import { createContext , useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [ user , setUser ] = useState({})
    const createUser = (email , password ) => {
        return createUserWithEmailAndPassword(auth , email , password )
    }
    const signInn = (email , password ) => {
        return signInWithEmailAndPassword(auth , email , password )
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    } , [] )

    return (
        <UserContext.Provider value={ { signInn , createUser , user , logout } }>
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(UserContext)
}