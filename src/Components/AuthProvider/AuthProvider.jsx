import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Google Provider 1
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //! Email/Password Provider
  //todo: Register User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //todo: Login User
  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //todo: LogOut User
  const logoutUser = () => {
    return signOut(auth);
  };

  //!AuthStateChange 2
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setLoading(false);
      console.log("Current user -->", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    LoginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
