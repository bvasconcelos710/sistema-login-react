import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/home' element={<HomePage />}></Route>
            </Routes>
        </Router>
    )
}

export default PrivateRoutes;