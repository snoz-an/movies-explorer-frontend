import React from 'react';
import { useHistory } from 'react-router-dom';


function NotFound() {
    const history = useHistory()
    
return(
    <div className="error">
        <h1 className="error__number">404</h1>
        <p className="eroor__text">Страница не найдена</p>
        <button type="button" className="error__back" onClick={() => history.goBack()}>Назад</button>
    </div>

)
}

export default NotFound;