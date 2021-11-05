import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

//alterado de Routes para Rota para a v6 do react-router-dom não conflitar
function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rota;