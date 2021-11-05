import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

function Routes2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routes2;