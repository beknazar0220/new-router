import React,{useState} from 'react'
import apiClient from '../axios/apiClient'

function CreatProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [images, setImage] = useState("")

    async function sendProduct() {
        const payload = {
            title: title,
            price: price,
            discount: discount,
            images: images,
        }; 
        try{
            const res = await apiClient.post("/example", payload)

            console.log(res)
        } catch (error){
            console.log(error);
        }
    }
  return (
    <div>
        <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder='title'/>
        <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder='Price'/>
        <input value={discount} onChange={(event) => setDiscount(event.target.value)} type="number" placeholder='Discount'/>
        <input value={images} onChange={(event) => setImage(event.target.value)} type="text" placeholder='Image'/>
        <button onClick={() => sendProduct()}>Create</button>
    </div>
  )
}

export default CreatProduct