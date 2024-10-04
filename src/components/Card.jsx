import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card({data}) {
  function findPresent(p, d){
    let result = ((p - d) / p) * 100;
    return result.toFixed(0)
  }
  return (
    <Link to={`/product/${data.id}`} className='product'>
      <div className='product-image'>
      <img src={data.image} alt="" />
      {
        data.discount && <div className='discount'>-{findPresent(data.price, data.discountedPrice)}%</div>
      }
      </div>
    <div className='product-content'>
        <h3>{data.title}</h3>
    </div>
    <div className='prices'>
        <p>{data.discountedPrice}</p>
    </div>
</Link>
  )
}

export default Card