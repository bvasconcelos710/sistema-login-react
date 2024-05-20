import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { api } from '../api';


interface AuthContextType {
    isAuthenticated: boolean;
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    profile: () => void;
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
            // Supondo que a resposta contenha o token e informações do usuário
            const { tokens, user } = response.data;

            // Armazenar o token (localStorage, cookies, etc.)
            localStorage.setItem('token', tokens.access);

            setIsAuthenticated(true);
            setUser(user); // Ajuste de acordo com a estrutura de dados do usuário retornado
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    };

    const profile = async () => {
        try {
            const response = await api.get('/auth/login/');

            const { user } = response.data;
            setUser(user);
            setIsAuthenticated(true);



        }
        catch (error) {
            console.error('Profile failed:', error);
            throw new Error('Profile failed');
        }
    }

    const logout = () => {
        // Remover o token
        localStorage.removeItem('token');

        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, profile, logout }}>
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
