import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props){

const [searchedMovies, setSearchedMovies] = React.useState(0);
const [moreMoviesCards, setMoreMoviesCards] = React.useState(0);
  
  

React.useEffect(() => {

  if (props.windowWidth > 768 && searchedMovies !== 12 && moreMoviesCards !== 3) {
    setSearchedMovies(12);
    setMoreMoviesCards(3);
  } else if (props.windowWidth > 480 && props.windowWidth < 768 && searchedMovies !== 12 && moreMoviesCards !== 3) {
    setSearchedMovies(8);
    setMoreMoviesCards(2);
  } else if(props.windowWidth > 320 && props.windowWidth < 480 && searchedMovies !== 12 && moreMoviesCards !== 3) {
    setSearchedMovies(5);
    setMoreMoviesCards(2);
        }
      }, [props.windowWidth])

function handleMoreBtnClick() {
   setSearchedMovies(searchedMovies+moreMoviesCards)
}
         
        

    return(
    <>
     <div className="nothing-found__container"><span className="nothing-found">{props.message}</span></div>
        <ul className="movies-list">
            {props.movies
             .slice(0, searchedMovies)
            .map((movie)=> (
                <MoviesCard key={movie.id} cardData={movie} onCardLike={props.onCardLike}/>
               )
               )}
        </ul>
        <div className="movies__button-more-container">
        {props.movies.length <= 12 || searchedMovies >= props.movies.length ?
        <></>
        :
        <button type="button" className="movies__button-more" onClick={handleMoreBtnClick} >Ещё</button>
}
        </div>
    </>
    )
    }

    export default MoviesCardList