import api from '../../Services/api'
import React, { useEffect, useState } from 'react'
import '../../App.css'
function Home() {

  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregandoAPI() {
      const response = await api.get('/products')
      setProdutos(response.data)
      setCarregando(false)
    }
    carregandoAPI()

  }, [])

  if (carregando) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    )

  }
  return (
    <div className="container">
      <div className="row">
        {produtos.map((item) => {
          return (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body"> 

                  {/* Esse codigo esta chamando o titulo da API definindo um tamanho maximo de 40 caracter */}
                  <h5 className="card-title">{item.title.length > 40 ? `${item.title.substring(0,40)}...` : item.title}</h5>
                 
                  <p className="card-text">
                    {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                  </p>

                  <strong className="card-text">{item.price}</strong>
                  <p className="text-muted">{item.category}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Home