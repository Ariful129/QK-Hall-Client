import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

import PropTypes from 'prop-types';



export const AuthContext = createContext();
const auth = getAuth(app);

//google dia login
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //SigIn with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,  googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }


    return (
     <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.any.isRequired
  };

export default AuthProvider;