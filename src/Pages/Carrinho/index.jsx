import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

export default function Carrinho({ contadorCarrinho }) {
    return (
        <>
            <div className="container -mt-14 mb-10">
                <Link to="/carrinho">
                    <button className=' flex w-full justify-end' >
                        <FaShoppingCart />  <span>{contadorCarrinho}</span>
                    </button>
                </Link>
            </div><br></br>
        </>

    )
}
