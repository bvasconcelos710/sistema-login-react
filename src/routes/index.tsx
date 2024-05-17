import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='/home' element={<HomePage />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;