import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'


function Movies(props) {
 const [shortMovies, setShortMovies] = React.useState(false)

    return(
        <>
            <section>
                <Header loggedIn={props.loggedIn}/>
                <SearchForm onSubmit = {props.onSubmit} 
                setShortMovies={setShortMovies} shortMovies={shortMovies}
                // setShortMovies={props.setShortMovies} shortMovies={props.shortMovies}
                
                />
                <Preloader isLoading={props.isLoading}/>
                <MoviesCardList movies={
                shortMovies? props.movies.filter(movie=> movie.duration <=40) :props.movies
            }  message={props.message} onCardLike={props.onCardLike} 
                windowWidth={props.windowWidth} savedMovies={props.savedMovies} handleSaveMovie={props.handleSaveMovie}
                setMyFilms={props.setMyFilms} myFilms={props.myFilms}

                liked={props.liked} setLiked={props.setLiked}
                />
                

                {/* <div className="movies__button-more-container">
                    <button type="button" className="movies__button-more" onClick={sliceArray}>Ещё</button>
                </div> */}
                
                <Footer />
            </section>
        </> 
    ) 
}

export default Movies