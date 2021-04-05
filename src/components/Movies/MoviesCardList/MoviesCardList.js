import MoviesCard from '../MoviesCard/MoviesCard';
import initialMovies from "../../../vendor/movies"

function MoviesCardList(){
    return(
    
        <ul className="movies-list">
            {initialMovies.map(movies=>{
                return <MoviesCard {...movies} />
            })}
        </ul>
    )
    }

    export default MoviesCardList