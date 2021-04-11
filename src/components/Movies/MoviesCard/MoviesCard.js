import React from 'react';
import Like from '../../../images/like.svg'
import disLike from '../../../images/like-desibled.svg'

function MoviesCard(props) {

    const cardData = props.cardData;

    function handleLikeClick() {
        props.onCardLike(cardData);
    } 

    
    return(
        <li className="movie">
            <a href={cardData.trailerLink} className='movie__trailer' target='blank'>
            <img src={
  cardData.image && cardData.image.url
    ? `https://api.nomoreparties.co${cardData.image.url}`
    : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер'
} alt="постер" className="movie__img" />
            </a>
            <div className="movie__name-container">
                <h3 className="movie__name">{cardData.nameRU}</h3>
                <button type="button" className="like" >
                    <img src={props.isFavorite? Like: disLike}  className="like__img" alt="лайк" onClick={handleLikeClick}/>

                    {/* <img src={ !isSaved ? evt => saveMovie(evt) : evt => deleteMovie(evt)}  className="like__img" alt="лайк" onClick={handleLikeClick}/> */}

                    
                </button>
            </div>
            <span className="movie__time">{cardData.duration} min</span>
           
        </li>
    )
    }


    export default MoviesCard

// import React from 'react';
// import Like from '../../../images/like.svg'
// import disLike from '../../../images/like-desibled.svg'

// function MoviesCard(props) {
    
//     return(
//         <li className="movie">
//             <img src = {props.poster} alt="постер" className="movie__img" />
//             <div className="movie__name-container">
//                 <h3 className="movie__name">{props.name}</h3>
//                 <button type="button" className="like" >
//                     <img src={props.isFavorite? Like: disLike} className="like__img" alt="лайк"/>
//                 </button>
//             </div>
//             <span className="movie__time">{props.duration}</span>
//         </li>
//     )
//     }


//     export default MoviesCard

    




