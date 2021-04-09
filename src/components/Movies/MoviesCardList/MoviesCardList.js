import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props){
    return(
    
        <ul className="movies-list">
            {props.movies.map((movie)=> (
                <MoviesCard key={movie.id} cardData={movie} />
               )
               )}
        </ul>
    )
    }

    export default MoviesCardList

// import MoviesCard from '../MoviesCard/MoviesCard';
// import initialMovies from "../../../vendor/movies"

// function MoviesCardList(){
//     return(
    
//         <ul className="movies-list">
//             {initialMovies.map(movies=>{
//                 return <MoviesCard {...movies} />
//             })}
//         </ul>
//     )
//     }

//     export default MoviesCardList