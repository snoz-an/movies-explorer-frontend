import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import api from '../../utils/api';


function SavedMovies(props) {
    const [movies, setMovies] = React.useState([])
    const [shortMovies, setShortMovies] = React.useState(false)
    const [myFilms, setMyFilms] = React.useState(false)
    const [validFilms, setValidFilms] = React.useState([])
    React.useEffect(()=>{
        api.getSavedMovies()
            .then(res=>{

                console.log(res)
                setMovies(res)

            })
            .catch((err)=>{
                console.log(err)
            })
    }, [myFilms])

    return(
        <>
            <section>
                <Header loggedIn={props.loggedIn}/>
                <SearchForm onSubmit = {props.onSubmit} setShortMovies={setShortMovies} shortMovies={shortMovies}/>
                <MoviesCardList 
                savedMovies={
                    shortMovies? props.savedMovies.filter(movie=> movie.duration <=40) :props.savedMovies
                }
                message={props.message} windowWidth={props.windowWidth}
                setMyFilms={setMyFilms} myFilms={myFilms}
                handleDeleteMovie={props.handleDeleteMovie}
                />
                <div className="movies__button-more-container">
                    <button type="button" className="movies__button-more_none">Ещё</button>
                </div>


                <Footer />
            </section>
        </> 
    ) 
}

export default SavedMovies