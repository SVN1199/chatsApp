import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import JwtDecode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                const decodedToken = JwtDecode(storedToken);
                const userId = decodedToken.userId;
                setUserId(userId);
                setToken(storedToken);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ token, userId , setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
