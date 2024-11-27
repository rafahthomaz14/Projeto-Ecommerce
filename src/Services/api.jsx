import axios from 'axios'

//API- https://fakestoreapi.com/products

const api =  axios.create({
    baseURL: '//https://fakestoreapi.com'
})

export default api
