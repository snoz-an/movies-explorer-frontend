import React from 'react';

function MoviesCard(props) {
    
    return(
        <li className="movie">
            <img src = {props.poster} alt="постер" className="movie__img" />
            <div className="movie__name-container">
                <h3 className="movie__name">{props.name}</h3>
                <button type="button" className="like" >
                    <div alt="лайк" tabindex="0" className="movie__like"/>
                </button>
            </div>
            <span className="movie__time">{props.duration}</span>
        </li>
    )
    }

    export default MoviesCard

    




