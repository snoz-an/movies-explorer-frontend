import React from 'react';
import Like from "../../../images/like.svg"
import Delete from "../../../images/delete.svg"


function MoviesCard(props) {

    return(
        <li className="movie">
            <img src = {props.poster} alt="постер" className="movie__img" />
            <div className="movie__name-container">
                <h3 className="movie__name">{props.name}</h3>
                <button type="button" className="like" >
                    <img src={Like} alt="лайк"/> 
                </button>
    
            </div>
            <span className="movie__time">{props.duration}</span>
        </li>
    )
    }

    export default MoviesCard

    




