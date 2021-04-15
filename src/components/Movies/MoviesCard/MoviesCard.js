import React from 'react';
import Like from '../../../images/like.svg'
import disLike from '../../../images/like-desibled.svg'
import api from '../../../utils/api';

function MoviesCard(props) {
    const [isCardLikeClicked, setIsCardLikeClicked] = React.useState(false);
    // const [liked, setLiked] = React.useState(true)

  const cardData = props.cardData;
  const handleSaveMovie = props.handleSaveMovie

  const setLikes = React.useCallback(() => {
    const likesCard = props.savedMovies.find((movie) => movie.movieId === cardData.id);
    if (likesCard) {
      setIsCardLikeClicked(true);
    } else {
      setIsCardLikeClicked(false);
    }
  }, [cardData.id, props.savedMovies]);

  React.useEffect(() => {
    setLikes();
  }, [setLikes]);



// function handleDeleteMovie() {
//     setIsCardLikeClicked(false)
//     api
//     .deleteMovie(cardData._id)
// }

    
    function handleLikeClick() {
       
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
          setIsCardLikeClicked(true)
        }
          else {
            const savedCard = props.savedMovies.find((movie) => movie.movieId === cardData.id);
            // props.handleDeleteMovie(savedCard);
            setIsCardLikeClicked(false);
                api
                  .deleteMovie(savedCard._id)
                  .then(() => { 
                    console.log(savedCard._id)
                    // props.setMyFilms(!props.myFilms)
                    // props.setIsLiked(false)
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
                    <img src={isCardLikeClicked ? Like: disLike}  className="like__img" alt="лайк" onClick={handleLikeClick} handleSaveMovie={props.handleSaveMovie} 
                    handleDeleteMovie={props.handleDeleteMovie}/>

                    {/* <img src={ !isSaved ? evt => saveMovie(evt) : evt => deleteMovie(evt)}  className="like__img" alt="лайк" onClick={handleLikeClick}/> */}

                    
                </button>
            </div>
            <span className="movie__time">{`${Math.floor(cardData.duration / 60)}ч ${cardData.duration % 60}м`}</span>
           
        </li>
    )
    }


    export default MoviesCard



    




