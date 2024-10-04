import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <h2>Твоё образование</h2>
      <h5>Дополнительное образование и курсы обучения онлайн</h5>
        <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to="/servis">Servis</Link>
        </li>
        <li>
          <Link to="/figma">Figma</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/Item">Item</Link>
        </li>
      </ul>
      </div>
  )
}

export default Header