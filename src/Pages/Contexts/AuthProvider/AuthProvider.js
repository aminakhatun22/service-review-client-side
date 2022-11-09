import React, { createContext, useEffect, useState } from 'react';
import app from '../../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([null]);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);

        });
        return () => {
            return unSubsCribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;
