import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-h1'>
      <h1>Твоё образование</h1>
      <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</h5>
      </div>
      <div className='footer-h2'>
        <h2>О проекте</h2>
        <h6>О нас</h6>
        <h6>Вакансии</h6>
        <h6>Обратная связь</h6>
        <h6>ЧаВО?</h6>
      </div>
      <div className='footer-h2'>
      <h2>Курсы</h2>
      <h6>Категории</h6>
      <h6>Как учиться</h6>
      <h6>Стать преподавателем</h6>
      </div>
      <div className='footer-h2'>      
      <h2>Генераторы</h2>
      <h6>Домашки</h6>
      <h6>Экзамены</h6>
      <h6>Олимпиады</h6>
      <h6>Листы</h6>
      </div>
      <div className='footer-h2'>
      <h2>Контакты</h2>
      <h6>+7900000000</h6>
      <h6>kursy@tvoeobr.ru</h6>
      <h6>Российская Федерация,</h6> 
      <h6>Челябинская область,</h6>
      <h6>г. Магнитогорск</h6>
      </div>
    </div>
  )
}

export default Footer