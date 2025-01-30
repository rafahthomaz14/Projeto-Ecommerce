import React from 'react'
import '../Carrinho/estilo.css'
import {Link} from 'react-router-dom';

export default function Carrinho({ contadorCarrinho }) {
    return (
        <>
            <div className="qnt container text-end">

                <h4>Itens Adicionado ao Carrinho: {contadorCarrinho}</h4>
                <Link to="/carrinho"><button>Carrinho de Compras</button></Link>
            </div><br></br>
        </>

    )
}
