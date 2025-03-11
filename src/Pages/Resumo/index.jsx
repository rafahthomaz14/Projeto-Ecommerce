import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaTrash } from 'react-icons/fa';

export default function Resumo() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const listaProdutos = localStorage.getItem('@carrinho')
        setProdutos(JSON.parse(listaProdutos) || [])
    }, [])

    function excluirProduto(id) {
        let filtroProduto = produtos.filter((item) => {
            return (item.id !== id)
        })
        setProdutos(filtroProduto)
        localStorage.setItem('@carrinho', JSON.stringify(filtroProduto))
       toast.success('Item removido !')

    }

    return (
        <div className="resumo">
            <ToastContainer autoClose={3000} />
            <h1>Resumo do Carrinho</h1>
            <br />
            {produtos.length == 0 && <span> <h5>Você nao possui itens no carrinho !</h5></span>}
            <ul>
                {produtos.map((item) => {
                    return (
                        <div className="conteudo">
                            <li key={item.id}>
                                <span className="titulo">{item.title}  </span>

                                <button className="btn-excluir" onClick={() => excluirProduto(item.id)}>
                                    <FaTrash /> Excluir
                                </button>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}