import React from 'react';
import Like from '../../../images/like.svg'
import disLike from '../../../images/like-desibled.svg'
import api from '../../../utils/api';

function MoviesCard(props) {
    const [isCardLikeClicked, setIsCardLikeClicked] = React.useState(false);
    // const [liked, setLiked] = React.useState(true)

  const cardData = props.cardData;
  const handleSaveMovie = props.handleSaveMovie
    
    function handleLikeClick(evt) {
        evt.stopPropagation();
        if (!isCardLikeClicked) {
            handleSaveMovie({
            country: cardData.country || "default",
            director: cardData.director,
            duration: cardData.duration,
            year: cardData.year,
            description: cardData.description,
            image: cardData.image.url
              ?  `https://api.nomoreparties.co${cardData.image.url}`
              : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер',
            trailer: cardData.trailerLink,
        
            movieId: cardData.id,
            nameRU: cardData.nameRU,
            nameEN: cardData.nameEN,
            thumbnail: cardData.image.formats.thumbnail.url
              ? `https://api.nomoreparties.co${cardData.image.formats.thumbnail.url}`
              : "https://www.youtube.com",
            owner: cardData.owner,
          })
        }
          else {
            const savedCard = props.savedMovies.find((movie) => movie.movieId === cardData.id);
            props.handleDeleteSavedMovie(savedCard);
            setIsCardLikeClicked(false);
                api
                  .deleteMovie(cardData._id)
                  .then(() => { 
                    console.log(cardData._id)
                    props.setMyFilms(!props.myFilms)
                    props.setIsLiked(false)
                  })
                  .catch((err) => {
                    console.log(err);
                  });
          }
        
        
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
                    <img src={isCardLikeClicked ? Like: disLike}  className="like__img" alt="лайк" onClick={handleLikeClick} handleSaveMovie={props.handleSaveMovie}/>

                    {/* <img src={ !isSaved ? evt => saveMovie(evt) : evt => deleteMovie(evt)}  className="like__img" alt="лайк" onClick={handleLikeClick}/> */}

                    
                </button>
            </div>
            <span className="movie__time">{`${Math.floor(cardData.duration / 60)}ч ${cardData.duration % 60}м`}</span>
           
        </li>
    )
    }


    export default MoviesCard



    




