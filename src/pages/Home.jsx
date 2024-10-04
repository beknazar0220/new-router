import React from 'react'
import { products } from '../data/products'
import Card from '../components/Card'
import "./Home.css"


function Home({data}) {
  return (
  <div>
    <div className='box1'>
    {
      products.map((item) => (
        <Card image={item.image} key={item.id} data={item} />
      ))
    }
    </div>
 </div>
  )
}

export default Home