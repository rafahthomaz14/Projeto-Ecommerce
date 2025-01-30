import React, { useState, useEffect } from "react"
import './estilo.css'
export default function Resumo() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const listaProdutos = localStorage.getItem('@carrinho')
        setProdutos(JSON.parse(listaProdutos) || [])
    }, [])

    function excluirProduto(id){
        let filtroProduto = produtos.filter((item)=>{
            return(item.id !== id)
        })

        setProdutos(filtroProduto)
        localStorage.setItem('@carrinho',JSON.stringify(filtroProduto))
    }

    return (
        <div>
            <h1>Resumo do Carrinho</h1>
            {produtos.length == 0 && <span>Voce nao possui itens no carrinho</span>}
            <ul>
                {produtos.map((item) => {
                    return (
                        <div>
                            <li key={item.id}>
                                <h5>{item.title}</h5>

                                <button onClick={()=>excluirProduto(item.id)}>Excluir</button>

                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}