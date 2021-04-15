import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard"
import api from '../../../utils/api'

function MoviesCardList(props){

    React.useEffect(() => {
      
            api.getSavedMovies()
            .then((сardData) => {
              props.setSavedMovies(сardData);
            })
            .catch((err) => {
              alert(err);
              console.log(err);
            })
      
    }, [props.setMyFilms, props.myFilms])
    
    return(
        <>
        <ul className="movies-list">
            {props.savedMovies.map(savedMovie=>{
               
               return  <MoviesCard 
                key={savedMovie._id} 

               cardData={savedMovie} {...savedMovie} setMyFilms={props.setMyFilms} myFilms={props.myFilms} 
               setSavedMovies={props.setSavedMovies}
               />
            })}
        </ul>
        </>
    )
}
export default MoviesCardList


