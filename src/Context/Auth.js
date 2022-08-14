import React, { useEffect, useState } from "react";
// import firebase from "../../config/fire-config";
// import { useRouter } from "next/router";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //   const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // router.push("/");
      }
    });
  }, [currentUser]);

  return (
    // <AuthContext.Provider value={{ currentUser }}>
    <AuthContext.Provider>{children}</AuthContext.Provider>
  );
};
