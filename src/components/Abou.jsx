import React from 'react'
import "./abou.css"

function Abou({data}) {
  return (
      <div className={`wrapper ${data.like ? "green" : "red" }`}>
        <div className="box">
        <div className="box1">
        <img src={data.image} alt="" />
        <h1 className='skidka'>vip</h1>
        </div>
        <div className="box1">
        <h2>{data.price}</h2>
        </div>
        <div className="box1">
            <h1>{data.text}</h1>
        </div>
        <div className="box1">
            <h1>{data.username}</h1>
        </div>
        <div className="box1">
        <h1>{data.name}</h1>
        </div>
        <div className="box1">
        <h1>{data.number}</h1>
        </div>
    </div>
</div>
  )
}

export default Abou