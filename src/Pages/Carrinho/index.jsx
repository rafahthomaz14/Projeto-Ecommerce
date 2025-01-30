import React from 'react'
import '../Carrinho/estilo.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

export default function Carrinho({ contadorCarrinho }) {
    return (
        <>
            <div className="qnt container text-end">
                <Link to="/carrinho">
                    <button>
                        <FaShoppingCart />  <span>{contadorCarrinho}</span>
                    </button>
                </Link>
            </div><br></br>
        </>

    )
}
