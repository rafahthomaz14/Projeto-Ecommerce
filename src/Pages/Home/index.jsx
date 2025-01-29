import api from '../../Services/api'
import React, { useEffect, useState } from 'react'
import Carrinho from '../Carrinho' // Importa o componente Menu
import '../Home/estilo.css'

function Home() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState([])
  const [contadorCarrinho, setContadorCarrinho] = useState(0)

  useEffect(() => {
    async function carregandoAPI() {
      const response = await api.get('/products')
      setProdutos(response.data)

      // Inicializa o contador para cada produto com 0
      const initialContadores = response.data.map(() => 0)
      setContador(initialContadores)

      setCarregando(false)
    }
    carregandoAPI()
  }, [])

  if (carregando) {
    return (
      <div>
        <h1 className='carregando'>Carregando...</h1>
      </div>
    )
  }

  function removerProduto(index) {
    if (contador[index] === 0) {
      alert('Adicione um item!')
    } else {
      const novosContadores = [...contador]
      novosContadores[index] -= 1
      setContador(novosContadores)
    }
  }

  function adicionarProduto(index) {
    const novosContadores = [...contador]
    novosContadores[index] += 1
    setContador(novosContadores)
  }

  function addCarrinho(index) {
    if (contador[index] === 0) {
      alert('Adicione um item!')
    } else {
      alert('Item Adicionado ao carrinho')
      setContadorCarrinho(contadorCarrinho + 1)

      const novosContadores = [...contador]
      novosContadores[index] = 0
      setContador(novosContadores)
    }
  }

  return (
    <div>

      <Carrinho contadorCarrinho={contadorCarrinho} />
      <div className="container">
        <div className="row">
          {produtos.map((item, index) => {
            return (
              <div className="col-md-3 mb-5" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
                    </h5>
                    <p className="card-text">
                      {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                    </p>
                    <strong className="card-text">{item.price}</strong>
                    <p className="text-muted">{item.category}</p>
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
