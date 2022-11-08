import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

//-------------------------------------
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  ///leading state to prevent the reload log out issue
  const [loading, setLoading] = useState(true);

  //Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignIn With email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //On auth state change  //Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside auth state change", currentUser);
      setUser(currentUser);
      ///leading state to prevent the reload log out issue
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //Sign-out
  const logout = () => {
    //clear local storage when logout
    localStorage.removeItem("genius-token");
    setLoading(true);
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
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
