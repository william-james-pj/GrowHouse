import React, { createContext, ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebase";

import { UserType } from "../@types/types";

type AuthContextType = {
  user: UserType | undefined;
  signInWithEmailAndPassword: (useProps: createUserProps) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logout: () => void;
  errorMsg: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type createUserProps = {
  name: string;
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>();
  const [errorMsg, setErrorMsg] = useState("");

  async function signInWithEmailAndPassword(useProps: createUserProps) {
    // try {
    //   const userCredential = await auth.createUserWithEmailAndPassword(
    //     useProps.email,
    //     useProps.password
    //   );
    //   const uid = userCredential.user?.uid;
    //   setUser({
    //     id: uid || "",
    //   });
    // } catch (error: any) {
    //   if (error.code === "auth/email-already-in-use") {
    //     setErrorMsg("This email address is already in use!");
    //   } else {
    //     setErrorMsg(error.message);
    //   }
    // }
  }

  async function loginWithEmailAndPassword(email: string, password: string) {
    // try {
    //   const userCredential = await auth.signInWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   const uid = userCredential.user?.uid;
    //   setUser({
    //     id: uid || "",
    //   });
    // } catch (error) {}
  }

  function logout() {
    auth.signOut().then(() => {
      setUser(undefined);
    });
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmailAndPassword,
        loginWithEmailAndPassword,
        logout,
        errorMsg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
