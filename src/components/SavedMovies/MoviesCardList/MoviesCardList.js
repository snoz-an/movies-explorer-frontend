import MoviesCard from "../MoviesCard/MoviesCard"
import savedMovies from "../../../vendor/saved-movies"
function MoviesCardList(){
    return(
        <>
        <ul className="movies-list">
            {savedMovies.map(movies=>{
               return  <MoviesCard {...movies} />
            })}
        </ul>
        </>
    )
}
export default MoviesCardList


// import MoviesCard from "../MoviesCard/MoviesCard"
// import savedMovies from "../../../vendor/saved-movies"
// function MoviesCardList(){
//     return(
//         <>
//         <ul className="movies-list">
//             {savedMovies.map(movies=>{
//                return  <MoviesCard {...movies} />
//             })}
//         </ul>
//         </>
//     )
// }
// export default MoviesCardList