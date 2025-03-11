import api from '../../Services/api'
import React, { useEffect, useState } from 'react'
import Carrinho from '../Carrinho' 
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function Home() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState([])
  const [contadorCarrinho, setContadorCarrinho] = useState(0)

  // Carregar contador
  useEffect(() => {
    async function carregandoAPI() {
      const response = await api.get('/products')
      setProdutos(response.data)

      // Recupera os contadores do localStorage 
      const contadorSalvo = JSON.parse(localStorage.getItem('@contador')) || new Array(response.data.length).fill(0)
      setContador(contadorSalvo)

      // Recupera o carrinho salvo
      const carrinhoSalvo = JSON.parse(localStorage.getItem('@carrinho')) || []
      setContadorCarrinho(carrinhoSalvo.length)

      setCarregando(false)
    }
    carregandoAPI()
  }, [])

  if (carregando) {
    return <h1 className='carregando'>Carregando...</h1>
  }

  function removerProduto(index) {
    if (contador[index] === 0) {
      toast.warn('Adicione um item!')
      return
    }

    const novosContadores = [...contador]
    novosContadores[index] -= 1
    setContador(novosContadores)

    localStorage.setItem('@contador', JSON.stringify(novosContadores))
  }

  function adicionarProduto(index) {
    const novosContadores = [...contador]
    novosContadores[index] += 1
    setContador(novosContadores)

    localStorage.setItem('@contador', JSON.stringify(novosContadores))
  }

  function addCarrinho(index) {
    if (contador[index] === 0) {
      toast.warn('Adicione um Produto !')
      return
    }

    const meuCarrinho = JSON.parse(localStorage.getItem('@carrinho')) || []
    const produtoAdicionado = produtos[index]

    // Adiciona o produto ao carrinho
    meuCarrinho.push(produtoAdicionado)
    localStorage.setItem('@carrinho', JSON.stringify(meuCarrinho))

    // Atualiza o contadorCarrinho
    setContadorCarrinho(meuCarrinho.length)

    // Zera o contador do produto adicionado
    const novosContadores = [...contador]
    novosContadores[index] = 0
    setContador(novosContadores)
    localStorage.setItem('@contador', JSON.stringify(novosContadores))

    toast.success('Adicionado com Sucesso !')
  }

  return (
    <div>
      <ToastContainer autoClose = {3000}/>
      <Carrinho contadorCarrinho={contadorCarrinho}  className= '-mt-20'/>
      <div className="container">
        <div className="row">
          {produtos.map((item, index) => (
            <div className="col-md-3 mb-5" key={item.id}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body ">
                  <h5 className="card-title">
                    {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
                  </h5>
                  <p className="card-text">
                    {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                  </p>
                  <p className="text-muted">{item.category}</p>
                  <strong className="card-text">
                    <h3>${item.price}</h3>
                  </strong>

                  <div className="botoes">
                    <button onClick={() => addCarrinho(index)}>Adicionar ao Carrinho</button>
                    <div className="botao">
                      <button onClick={() => removerProduto(index)}>-</button>
                      {contador[index]}
                      <button onClick={() => adicionarProduto(index)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
      <p>© 2025 - Projeto E-Commerce</p>
      </div>
    </div>
  )
}

export default Home
