import React from 'react'
import { results } from '../data/results'
import Abou from '../components/Abou'

function About(data) {
  return (
    <div className='root'>
        {
      results.map((item) => (
        <Abou image={item.image} key={item.id} data={item} title={data.title} text={data.text} price={data.price} currency={data.currency} number={data.phone_number}/>
      ))
    }
    </div>
  )
}

export default About