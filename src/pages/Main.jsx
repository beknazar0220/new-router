import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Main.css"
import { Link } from 'react-router-dom'
import CreateProduct from './CreateProduct'
import apiClient from '../axios/apiClient'


function Main() {
    const [products, setProducts] = useState([])
    const [active, setActive] = useState(false)
    async function getProducts () {
        try {
            const res = await apiClient.get("/products")
            console.log(res);
            setProducts(res.data)

            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    async function deleteIMG(id) {
        try {
            const res =await apiClient.delete(`/products/${id}`)
            console.log(res);
            setActive(error)
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='pro'>
      <Link to="/create"><button>Create Products</button></Link>
      {
        products.map((item) => (
         <div className='pros' key={item.id}>
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
        <button onClick={ ()=> deleteIMG(item.id)}>Delete</button>
        </div>
        ))
      }
    </div>
  )
}

export default Main