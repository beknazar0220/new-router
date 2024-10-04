import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import "./ProductDetail.css"

function ProductDetail({ item }) {
  const { id } = useParams();

  const findProduct = products.find((item) => item.id == id)

  const[title, setTitle] = useState ("Titan")
  const[cotegory, setCotegory] = useState ("Beka")
  const [photo, setPhoto] = useState(findProduct.image)

  function changeTitle(){
    if(title == "Titan"){
      setTitle("Kutman")
    }else{
      setTitle("Titan")
    }
  }

  return (
    <div className='detail'>  
      {id} 
      <img src={photo} alt="" /> 
      <div className='detail-content'> 
      <h2>{findProduct.title}</h2> 
      <h2>{findProduct.price}$</h2> 
      <p>{findProduct.description}</p> 
      </div> 
     <div className='detail-images'> 
     { 
          findProduct.images.map((item) =>( 
            <img onClick={() => setPhoto} src={item} alt="" /> 
          )) 
      } 
     </div> 
    {title}
    <button onClick={() => changeTitle("Kutman")}>Send</button>
    {cotegory}
    <button onClick={() => setCotegory("Akjol")}>click me</button>
    </div>
  );
}

export default ProductDetail