import logo from '../../images/logo-diplom.svg';
import React from "react"
import Burger from '../Movies/Burger/Burger';

import { useHistory } from 'react-router-dom';


function Header(props) {
    const history = useHistory()

    const { loggedIn } = props;


    return (
        <header className="header">
        
          {loggedIn
            ? (
              <>
              <div className="header header__loggedin">
                    <div className="header__loggedin-container">   
                        <img src={logo} alt="логотип" className="header__logo"/>
                       
                        <ul className="header__button-container header__button-container_loggedin">
                            <li><button type="button" className="header__button header__button_films" onClick={()=>{history.push("/movies")}}>
                               Фильмы
                            </button></li>
                            <li><button type="button" className="header__button header__saved-films" onClick={()=>{history.push("/saved-movies")}}>
                                Сохраненные фильмы
                            </button></li>
                    
                        </ul>

                    </div>
                <button type="button" className="header__button header__button-account" onClick={()=>{history.push("/profile")}}>
                        Аккаунт
                    </button>
                   
                <Burger/>    
                    

                </div>

                </>
            )
            : (
                <>
                <div className="header__loggedout">
                <img src={logo} alt="логотип" className="header__logo"/>
                <ul className="header__button-container">
                <li><button type="button" className="header__register-button" onClick={()=>{history.push("/signup")}}>
                    Регистрация
                </button></li>
                <li><button type="button" className="header__login-button" onClick={()=>{history.push("/signin")}}>
                    Войти
                </button></li>
            </ul>
            </div>
        </>
            )}
    
        </header>
        
      );
    }
  
   


export default Header





