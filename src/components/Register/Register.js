import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-diplom.svg';


function Register() {
    
return(
    <form className="register">
      <img src={logo} alt="логотип" className="header__logo header__logo_register"/>
      <h2 className="register__header">Добро пожаловать!</h2>
      <p className="register__input-name">Имя</p>
      <input className="register__input" id="name" placeholder="Имя" name="name" type="text"/>  
      <p className="register__input-name">E-mail</p>
      <input className="register__input" id="email" placeholder="Email" name="email" type="email"/>  
      <p className="register__input-name">Пароль</p>   
      <input className="register__input" id="password" placeholder="Пароль" name="password" type="password" />
      <button type="submit" className="register__button">Зарегестрироваться</button>
     <span className="register__login">Уже зарегистрированы?<Link to="/signin" className="register__login-link">Войти</Link></span>
    </form>
)
}

export default Register;