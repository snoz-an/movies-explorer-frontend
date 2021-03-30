import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-diplom.svg';


function Login() {
return(
    <form className="register">
        <img src={logo} alt="логотип" className="header__logo header__logo_register"/>
        <h2 className="register__header">Рады видеть!</h2>
        <p className="register__input-name">E-mail</p>
        <input className="register__input" id="email" placeholder="Email" name="email" type="email"/>  
        <input className="register__input register__input-name" id="password" placeholder="Пароль" name="password" type="password" />
        <button type="submit" className="register__button">Войти</button>
        <span className="register__login">Ещё не зарегистрированы?<Link to="/signup" className="register__login-link">Регистрация</Link></span>
    </form>
)
}

export default Login;