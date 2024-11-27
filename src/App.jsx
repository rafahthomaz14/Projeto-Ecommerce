import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './Services/api'
import React, { useEffect, useState } from 'react'


function App() {
  const[produtos,setProdutos] = useState([])

  useEffect(()=>{
    async function carregandoAPI() {
      const response = await api.get('/products')
      setProdutos(response.data)
    }
    carregandoAPI()
  },[])
  return (
    <>
      {produtos.map((item)=>{
        return(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <strong>{item.price}</strong>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <strong>{item.category}</strong>
          </div>
        )
      })}
    </>
  )
}

export default App
