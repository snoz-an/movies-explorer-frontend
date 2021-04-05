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
                <a href="" className="burger__nav-item" onClick={()=>{history.push("/")}}>Главная</a>
                <a href="" className="burger__nav-item burger__nav-item-underline" onClick={()=>{history.push("/movies")}}>Фильмы</a>
                <a href="" className="burger__nav-item" onClick={()=>{history.push("/saved-movies")}}>Сохраненые фильмы</a>
                <a href="" className="burger__nav-account" onClick={()=>{history.push("/profile")}}>Аккаунт</a>
                <button className="burger__exit-button" onClick={()=>{setburger(!burger)}}></button>
            </div>
        </>

)

}

export default Burger
