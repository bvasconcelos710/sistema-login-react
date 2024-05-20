import { useAuth } from '../context';
import PublicRoutes from './public';
import PrivateRoutes from './private';

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </>
    )
}

export default AppRoutes;