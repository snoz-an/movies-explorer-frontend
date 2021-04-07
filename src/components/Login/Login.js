import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-diplom.svg';
import {useFormWithValidation} from '../Validation'


function Login({onLogin, message}) {

    const {
        values,
        handleChange, 
        errors, 
        isValid, 
      } = useFormWithValidation();

    const [errorMessage, setErrorMessage] = useState('');
    
    const [isDisabled, setIsDisabled] = useState(false);
    
      React.useEffect(() => {
        setErrorMessage('');
      }, [values]);

      function handleSubmit(e) {
        e.preventDefault();
        onLogin({
          email: values.email,
          password: values.password
        });
    } 

    const checkInputs = () => values.name !== '' || values.email !== '';

    
    
return(
    <form onSubmit={handleSubmit} className="register">
        <img src={logo} alt="логотип" className="header__logo header__logo_register"/>
        <h2 className="register__header">Рады видеть!</h2>
        <p className="register__input-name">E-mail</p>
        <input className="register__input" id="email" placeholder="Email" name="email" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" required type="email" value={values.email} onChange={handleChange}/> 
        <span className="profile__input-error profile__input-error_login">{errors.email || ''}</span>
        <input className="register__input register__input-name" required id="password" placeholder="Пароль" name="password" type="password" value={values.password} onChange={handleChange} />

        <span className="profile__input-error profile__input-error_login">{errors.password || ''}</span>
        <span className="profile__input-error profile__input-error_login">{message}</span> 

        <button type="submit" className="register__button" onSubmit={handleSubmit} disabled={!isValid || !checkInputs() || isDisabled}>Войти</button>
        <span className="register__login">Ещё не зарегистрированы?<Link to="/signup" className="register__login-link">Регистрация</Link></span>
    </form>
)
}

export default Login;