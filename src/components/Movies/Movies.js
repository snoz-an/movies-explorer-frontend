import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'


function Movies(props) {

    return(
        <>
            <section>
                <Header loggedIn/>
                <SearchForm onSubmit = {props.onSubmit} onChange={props.onChange}/>
                <Preloader isLoading={props.isLoading}/>
                <MoviesCardList movies={props.movies} message={props.message} onCardLike={props.onCardLike} windowWidth={props.windowWidth}/>

                {/* <div className="movies__button-more-container">
                    <button type="button" className="movies__button-more" onClick={sliceArray}>Ещё</button>
                </div> */}
                
                <Footer />
            </section>
        </> 
    ) 
}

export default Movies