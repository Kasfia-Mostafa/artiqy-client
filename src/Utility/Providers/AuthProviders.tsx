/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.Config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  User,
  UserCredential
} from "firebase/auth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  googleSignIn: () => Promise<UserCredential>;
}


export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);

const AuthProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();
  // const axiosPublic = useAxiosPublic();

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name: string, photo: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }
    return Promise.reject("No user is currently logged in.");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        // axiosPublic.post("/jwt", userInfo).then((res) => {
        //   if (res.data.token) {
        //     localStorage.setItem("access-token", res.data.token);
        //   }
        // });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
