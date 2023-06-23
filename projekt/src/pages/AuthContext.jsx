import React, { createContext, useState } from 'react';


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(determineLoggedIn());

  function determineLoggedIn () {
    
    if (sessionStorage.getItem("token")  !== null ) {
     return true;
    } else {
    return false;
    }
  }
    

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };