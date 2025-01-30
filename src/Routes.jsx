import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Menu from './Components/Header'
import Resumo from './Pages/Resumo'
function Rotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<Resumo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
