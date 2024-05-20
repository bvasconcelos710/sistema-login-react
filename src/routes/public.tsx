import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const PublicRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
            </Routes>
        </Router>
    )
}

export default PublicRoutes;