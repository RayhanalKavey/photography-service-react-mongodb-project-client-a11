import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

//-----------------------
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "rayhan@text.com",
  });

  //Create object to send as value of AuthContext.provider
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
