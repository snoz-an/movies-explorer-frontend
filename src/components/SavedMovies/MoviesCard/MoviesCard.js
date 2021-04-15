import React from 'react';
import Delete from "../../../images/delete.svg"
import api from '../../../utils/api';


function MoviesCard(props) {
    const cardData = props.cardData

    const [liked, setLiked] = React.useState(true)
    const [backId, setBackId] = React.useState('')
    React.useEffect(()=>{
        api.getSavedMovies()
            .then((res)=>{
                const savedId =  res.map(movie => movie.movieId);
        let savedBackId
        res.forEach((el)=>{
            if(el.movieId === cardData.id){
                 savedBackId = el._id
            }
        })
        setLiked(savedId.includes(`${cardData.id}`))
        setBackId(savedBackId)
            })
    }, [cardData])


    
    function handleDeleteMovie() {
       
        api
          .deleteMovie(cardData._id)
          .then(() => { 
            console.log(cardData._id)
            props.setMyFilms(!props.myFilms)
            props.setIsLiked(false)

            const newCards = cardData.filter((c) =>  {
                return (c._id !== cardData._id) });
                // Обновляем стейт
                props.setSavedMovies(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      }

     
    

     
    return(
        <li className="movie movie_saved">
              <a href={cardData.trailer} className='movie__trailer' target='blank'>
            <img src = {cardData.image} alt="постер" className="movie__img" />
            </a>
        
            <div className="movie__name-container">
                <h3 className="movie__name">{cardData.nameRU}</h3>
                <button type="button" className="movie__delete" >
                    <img src={Delete} alt="удалить" className="movie__delete" onClick={handleDeleteMovie}/>
                </button>
    
            </div>
            <span className="movie__time">{`${Math.floor(cardData.duration / 60)}ч ${cardData.duration % 60}м`}</span>
        </li>
    )
    }

    export default MoviesCard

    




