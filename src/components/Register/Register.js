import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-diplom.svg';
import {useFormWithValidation} from '../Validation'



function Register({onRegister, message}) {
    
const {
  values,
  handleChange, 
  errors, 
  isValid, 
  resetForm
} = useFormWithValidation();

const [errorMessage, setErrorMessage] = useState('');

const [isDisabled, setIsDisabled] = useState(false);

const checkInputs = () => values.email !== '' && values.password !== '' && values.name !== '' ;

React.useEffect(() => {
  resetForm(
    values.name,
    values.email,
    values.password
  );
}, []);

React.useEffect(() => {
  setErrorMessage('');
}, []);

function handleSubmit(e) {
  e.preventDefault();
  if (values.name, values.email, values.password) {
  onRegister({
    name: values.name,
    email: values.email,
    password: values.password
  });
}
} 





return(
    <form className="register" onSubmit={handleSubmit}>
      <img src={logo} alt="логотип" className="header__logo header__logo_register"/>
      <h2 className="register__header">Добро пожаловать!</h2>
      <p className="register__input-name">Имя</p>
      <input className="register__input" required id="name" placeholder="Имя" name="name" type="text"  value={values.name} onChange={handleChange}/>  
      <span className="profile__input-error profile__input-error_login">{errors.name || ''}</span>


      <p className="register__input-name">E-mail</p>
      <input className="register__input" id="email" required placeholder="Email" name="email" type="email" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" value={values.email} onChange={handleChange}/>  
      <span className="profile__input-error profile__input-error_login">{errors.email || ''}</span>
      <p className="register__input-name">Пароль</p>  
      <input className="register__input" id="password" required placeholder="Пароль" name="password" type="password" value={values.password} onChange={handleChange}/>

      <span className="profile__input-error profile__input-error_login">{errors.password || ''}</span>
      <span className="profile__input-error profile__input-error_login">{errors.message}</span> 


      <button type="submit" onSubmit={handleSubmit} className="register__button" disabled={!isValid || !checkInputs() || isDisabled}>Зарегестрироваться</button>

      
     <span className="register__login">Уже зарегистрированы?<Link to="/signin" className="register__login-link">Войти</Link></span>
    </form>
)
}

export default Register;