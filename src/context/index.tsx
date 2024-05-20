import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { api } from '../api';


interface AuthContextType {
    isAuthenticated: boolean;
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderContextProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderContextProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login/', {
                email,
                password
            });

            const { tokens, user } = response.data;


            localStorage.setItem('token', tokens.access);

            setIsAuthenticated(true);
            setUser(user);
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    };

    // const profile = async () => {
    //     try {
    //         const response = await api.get('/auth/profile/');

    //         const { user } = response.data;
    //         setUser(user);
    //         setIsAuthenticated(true);



    //     }
    //     catch (error) {
    //         console.error('Profile failed:', error);
    //         throw new Error('Profile failed');
    //     }
    // }

    const logout = () => {

        localStorage.removeItem('token');

        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
