import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: "",
    mail : "",
    isLoggedIn: false,
    login: (token, email) => {},
    logout: () => {},
    
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState("");
    const [mail, setMail] = useState("");
    
    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        email.replace("@","");
        email.replace(".","")
        setMail(email);
    }

    const logoutHandler = () => {
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        mail: mail
    };
    
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;



