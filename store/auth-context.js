import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

// wrapper app content
const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState();
    
    const authenticate = (token) => {
        setAuthToken(token);
        // first param: key second param: data (must be string)
        AsyncStorage.setItem('token', token);
    }

    const logout = () => {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>);
}

export default AuthContextProvider;