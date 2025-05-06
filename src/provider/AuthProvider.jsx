import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setUser(null);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        setUser(null);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setUser(null);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // console.log(currentUser);
                setUser(currentUser)
            }
            else {
                console.log("user is sign out");
            }
        })
        return () => {
            unSubscribe()
        };
    }, [])

    // console.log(user)

    const userInfo = {
        user,
        createUser,
        signinUser,
        signOutUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;