import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Menu from './Components/Header'
function Rotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
