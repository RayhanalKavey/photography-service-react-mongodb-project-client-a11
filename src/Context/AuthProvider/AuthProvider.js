import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

//-----------------------
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignIn With email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //---------------  Google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //On auth state change  //---------Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside auth state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //------------Sign-out
  const logout = () => {
    //clear local storage when logout
    localStorage.removeItem("genius-token");
    return signOut(auth);
  };

  //Create object to send as value of AuthContext.provider
  const authInfo = {
    user,
    setUser,
    googleLogin,
    logIn,
    createUser,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
