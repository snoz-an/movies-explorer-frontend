import React from 'react';
import Delete from "../../../images/delete.svg"


function MoviesCard(props) {


    return(
        <li className="movie movie_saved">
            <img src = {props.poster} alt="постер" className="movie__img" />
            <div className="movie__name-container">
                <h3 className="movie__name">{props.name}</h3>
                <button type="button" className="movie__delete" >
                    <img src={Delete} alt="удалить" className="movie__delete"/>
                </button>
    
            </div>
            <span className="movie__time">{props.duration}</span>
        </li>
    )
    }

    export default MoviesCard

    




