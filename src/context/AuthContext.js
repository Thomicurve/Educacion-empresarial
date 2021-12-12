import React, { useState, createContext } from 'react';
import useCookies from '../hooks/useCookies';

const AuthContext = createContext({token: ''});

export const AuthContextProvider = ({children}) => {
    const { getCookie } = useCookies();
    const [token, setToken] = useState(getCookie('userID'));

    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
