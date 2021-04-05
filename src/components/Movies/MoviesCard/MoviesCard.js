import React from 'react';
import Like from '../../../images/like.svg'
import disLike from '../../../images/like-desibled.svg'

function MoviesCard(props) {
    
    return(
        <li className="movie">
            <img src = {props.poster} alt="постер" className="movie__img" />
            <div className="movie__name-container">
                <h3 className="movie__name">{props.name}</h3>
                <button type="button" className="like" >
                    <img src={props.isFavorite? Like: disLike} className="like__img" alt="лайк"/>
                </button>
            </div>
            <span className="movie__time">{props.duration}</span>
        </li>
    )
    }



    
    export default MoviesCard

    




