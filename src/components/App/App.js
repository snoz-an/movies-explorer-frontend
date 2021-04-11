//import logo from '../../logo.svg';
import React from 'react';
import { Route, Switch, Redirect, withRoute, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import useWindowSize from '../../utils/useWindowSize';

import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import CurrentUserContext from  '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import api from '../../utils/api';
import MoviesApi from '../../utils/MoviesApi';

import * as auth from '../../utils/auth';


function App(props) {

  const windowWidth = useWindowSize();

  const history = useHistory();

  const [currentUser, setCurrentUser ] = React.useState({})
  const [loggedIn, setLoggedIn] = React.useState(false);  
  const [userData, setUserData] = React.useState({
    name:'',
    email: '',
    password: ''
  });
  const [movies, setMovies] = React.useState([])
  const [message, setMessage] = React.useState('')
  const [filtredMovies, setFiltredMovies] = React.useState([])
  

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser({ name: res.name, email: res.email });
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch(err => {
          console.log(err);
          setLoggedIn(false);
        });
    }
  };

  React.useEffect(() => {
    tokenCheck();
    setMovies([])
    // Promise.all([
    //   MoviesApi.getInitialCards(),
    // ])
    // .then(([userData, savedMovies, movies]) => {
    //   let localMovies = [];
    //   const setlocalMovies = () => {
    //     if (!localStorage.getItem('movies')) {
    //       localStorage.setItem('movies', JSON.stringify(movies));
    //     } else {
    //       localStorage.removeItem('movies');
    //       localStorage.setItem('movies', JSON.stringify(movies));
    //     }
    //     return localMovies = JSON.parse(localStorage.getItem('movies'));
    //   };
    //   setCurrentUser(userData);
    //   setMovies(setlocalMovies());
    // })
    // .catch((err) => {
    //   setLoading(false);
    //   console.log(err)
    // })
    // .finally(() => {
    //   setLoading(false);
    //   console.log('App boot success');
    // })
  }, [loggedIn]);

  

  const handleRegister = (data) => {
    const {name, email, password} = data;
    return auth.register(name, email, password)
      .then(() => {
        history.push('/movies')
        auth.authorize(email, password)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            history.push('/movies');
            setLoggedIn(true);
          }
        })
        .catch((err) => { 
          setLoggedIn(false);
          if (err) {
            setMessage('Что-то пошло не так...');
           }
        });
      })
}

  console.log(loggedIn)


  const handleLogin = (data) => {
    const {email, password} = data;
    return auth.authorize(email, password)
       .then((res) => {
          if(res.token) {
           localStorage.setItem('jwt', res.token)
           tokenCheck()
         }
       })
       .catch((err) => {
        if (err) {
         setMessage('Что-то пошло не так...');
        }
      })
  }


  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    history.push('/')
  }

  function handleUpdateUser(data) {
    const token = localStorage.getItem('jwt');
    api.setUserProfile(data, token)
    .then((user)=>{
      setCurrentUser(user.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  
  const [ isLoading, setLoading ] = React.useState(false);
  

  function searchMovie(evt){
    evt.preventDefault()
    console.log(evt.target[0].value)
    setLoading(true)
    MoviesApi.getInitialCards()
    .then(res=>{
    console.log(res)
    
    localStorage.setItem(res, JSON.stringify(res));
   
    const films = res.filter((movie)=>{
    return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
    })
    if (films.length === 0) {
      console.log("res")
      setMovies(films)
      setMessage('Ничего не найдено');
      setLoading(false)
     } 
    //  else if (films.duration <= 40){
    //   const shortFilm = res.filter((movie) => {
    //     return movie.duration <= 40
    //   }
    //     )

    //   setFiltredMovies(shortFilm)
     
    //  }
     else {
    setMovies(films)
    setLoading(false)
    setMessage('');
     }

    })
    
    }



    //  else if (films.duration <= 40){
    //   const shortFilm = res.filter((movie) => {
    //     return movie.duration <= 40
    //   }
    //     )

    //   setFiltredMovies(shortFilm)
     
    //  }

    // const [ isChecked, setChecked ] = React.useState(false);
        
    //     // function toggleCheckbox() {
    //     //     setChecked(!isChecked);
    //     //     console.log('hello')
    //     //   }

    //       function handleFilter(movie, searchSrting) {
    //         return movie.nameRU.toLowerCase().includes(searchSrting.toLowerCase());
    //       }

    //       function filterMoviesArray(movies, searchSrting) {
    //         setChecked(!isChecked);
    //         console.log('hello')
    //         if (isChecked) {
    //           const shortFilm = movies.filter((movie) => {
    //             return movie.duration <= 40 && handleFilter(movie, searchSrting);
    //           });
    //           return shortFilm;
    //         } else {
    //           const filteredMovies = movies.filter((movie) => {
    //             return handleFilter(movie, searchSrting);
    //           });
    //           return filteredMovies;
    //         } 
    //       }

    

  //   const [searchedMovies, setSearchedMovies] = React.useState(12);
  // const [moreMoviesCards, setMoreMoviesCards] = React.useState(4);
  // function handleMoreBtnClick() {
  //   setSearchedMovies(searchedMovies+moreMoviesCards);
  // }
  // if  (windowWidth >= 1670 && searchedMovies !== 12) {
  //   setSearchedMovies(12);
  //   setMoreMoviesCards(4);
  // } else if (windowWidth <= 1669 && windowWidth >= 1137) {
  //   setSearchedMovies(12);
  //   setMoreMoviesCards(3);
  // } 





    // function handleCardLike(cardData) {
    //   const token = localStorage.getItem('jwt');
    //   const isLiked = cardData.likes.some(i => i === currentUser._id);
      
    //   api.postSavedMovies(cardData._id, !isLiked, token)
    //     .then((newCard) => {
    //      const newCards = movies.map((c) => c._id === cardData._id ? newCard : c);
    //      /* const newCards = cards.map((c) =>  {
    //         return (c._id !== cardData._id) });*/
    //         console.log(newCards)
    //       setMovies(newCards);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    // } 
  
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <Route exact path="/" component= { Header } />
    
    <Switch>

      {/* <Route exact path="*" component= {NotFound} /> */}

      <Route exact path="/" component= { Main } />

      {/* <Route>
          {loggedIn ? <Redirect to="/movies"/> : <Redirect to="/"/>}
      </Route> */}
   
    <ProtectedRoute exact path="/movies" loggedIn={loggedIn} component= { Movies } movies={movies} onSubmit={searchMovie}  isLoading={isLoading} message={message}  windowWidth={windowWidth}
     onChange={filtredMovies}
    // onCardLike={handleCardLike} 
              
              />

    <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn} component= { SavedMovies } windowWidth={windowWidth} />
    <ProtectedRoute exact path="/profile" userData={userData} loggedIn={loggedIn} component={ Profile } onSignOut={handleSignOut} onUpdateUser={handleUpdateUser}/>

    <Route exact path="/signup">
        <Register onRegister={handleRegister} message={message}/>
      </Route>

      <Route exact path="/signin">
        <Login onLogin={handleLogin} message={message}/>
      </Route>
      <Route exact path="*" component= {NotFound} />
      </Switch>

</CurrentUserContext.Provider>
</>

);

}

export default App;

    
  
