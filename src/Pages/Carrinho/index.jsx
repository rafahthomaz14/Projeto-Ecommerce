import React from 'react'

export default function Carrinho({ contadorCarrinho }) {
    return (
        <>
            <div className=" container text-end">
                <h3>Itens Adicionado ao Carrinho: {contadorCarrinho}</h3>
            </div>
        </>

    )
}
