import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import apiClient from '../axios/apiClient'
import "./item.css"

function Item() {
    const [example, setExample] = useState([])
    const [active, setActives] = useState(false)
    async function getExample() {
        try {
            const res = await apiClient.get("/example")
            console.log(res);
            setExample(res.data)

            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getExample()
    }, []);

    async function deleteImage(id) {
        try {
            const res = await apiClient.delete(`/example/${id}`)
            console.log(res.data);
            setActives(error)
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className='item'>
        <Link to="/creat"><button>Creat Products</button></Link>
      {
        example.map((item) => (
         <div className='box' key={item.id}>
        <img src={item.images} alt="" />
        <h3>{item.value}</h3>
        <button onClick={ ()=> deleteImage(item.id)}>Delete</button>
        </div>
        ))
      }
    </div>
  )
}

export default Item