import MoviesCard from "../MoviesCard/MoviesCard"
function MoviesCardList(props){
    return(
        <>
        <ul className="movies-list">
            {props.savedMovies.map(savedMovie=>{
               
               return  <MoviesCard 
                key={props.savedMovies._id} 

               cardData={savedMovie} {...savedMovie} setMyFilms={props.setMyFilms} myFilms={props.myFilms} handleDeleteMovie={props.handleDeleteMovie}/>
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

