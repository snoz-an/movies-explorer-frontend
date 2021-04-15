import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'
import api from '../../utils/api';


function Movies(props) {
const [shortMovies, setShortMovies] = React.useState(false)

function handleSaveMovie(movieData) {
    
    api
      .postSavedMovies(movieData)
      .then((newMovie) => {
        props.setSavedMovies([newMovie.data, ...props.savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
    
  }

    return(
        <>
            <section>
                <Header loggedIn={props.loggedIn}/>
                <SearchForm onSubmit = {props.onSubmit} 
                setShortMovies={setShortMovies}
                shortMovies={shortMovies}
                />
                <Preloader isLoading={props.isLoading}/>
                <MoviesCardList movies={
                shortMovies? props.movies.filter(movie=> movie.duration <=40) :props.movies}  
                message={props.message}
                onCardLike={props.onCardLike} 
                windowWidth={props.windowWidth}
                savedMovies={props.savedMovies}
                handleSaveMovie={handleSaveMovie}
                setMyFilms={props.setMyFilms} myFilms={props.myFilms}
                liked={props.liked} setLiked={props.setLiked}
                />
                <Footer />
            </section>
        </> 
    ) 
}

export default Movies