import React from "react"
import { useHistory } from 'react-router-dom';

function Burger(){
    const [burger, setburger] = React.useState(false)
    const history = useHistory()

    return (

        <>
            <div className="burger__popup-shadow" style={{"display": `${burger? "block": "none"}`}}></div>
            <button type="button" className="burger__icon" onClick={()=>{setburger(!burger)}}></button>
            <div className="burger__nav" style={{"display": `${burger? "block": "none"}`}}>
                <button className="burger__nav-item" onClick={()=>{history.push("/saved-movies")}}>Сохраненые фильмы</button>
                <button className="burger__nav-item burger__nav-item-underline" onClick={()=>{history.push("/movies")}}>Фильмы</button>
                <button className="burger__nav-item" onClick={()=>{history.push("/")}}>Главная</button>
                <button className="burger__nav-account" onClick={()=>{history.push("/profile")}}>Аккаунт</button>
                <button className="burger__exit-button" onClick={()=>{setburger(!burger)}}></button>
            </div>
        </>

)

}

export default Burger
