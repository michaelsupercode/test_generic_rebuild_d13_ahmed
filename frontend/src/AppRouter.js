import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import UserDetail from './Pages/UserDetail';

const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users/:id' element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default AppRouter;