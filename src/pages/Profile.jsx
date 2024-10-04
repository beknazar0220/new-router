import React, {useState, useEffect} from 'react'
import "./profile.css"

const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

function Profile() {
    const [prots, setProts] = useState([]);
  
    async function getProts (){
      try{
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        setProts(data.meals)
      } catch (error){
        console.log(error);
      }
    }
  
    useEffect(() => {
      getProts()
    }, [])


  return (
    <div className='pro'>
        {
          prots.map((item) => (
            <div key={item.id}>
              <h2>{item.strMeal}</h2>
              <img src={item.strMealThumb} alt="" />
            </div>  
          ))}
    </div>
  )
}

export default Profile