import React from 'react'
import '../Carrinho/estilo.css'
export default function Carrinho({ contadorCarrinho }) {
    return (
        <>
            <div className="qnt container text-end">
                <h4>Itens Adicionado ao Carrinho: {contadorCarrinho}</h4>
            </div><br></br>
        </>

    )
}
