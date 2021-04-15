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
  const [localMovies, setLocalMovies] = React.useState([])
  const [permissionsCheck, setPermissonCheck] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shortMovies, setShortMovies] = React.useState(false)


  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    tokenCheck(token);
    setMovies([])
    const mov = JSON.parse(localStorage.getItem("movies"))
    if (mov) {
      setMovies(mov)
    } else {
      setMovies([])
    }
    // setMovies(mov)
    Promise.all([
      api.getSavedMovies(), api.getUserProfile(token)
    ])
      .then(([сardData, res]) => {
        setSavedMovies(сardData);
        console.log(savedMovies)

        if (res) {
          setCurrentUser({ name: res.name, email: res.email });
          setLoggedIn(true);
          // history.push('/movies');
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
        setLoggedIn(false);
      })
      .finally(() => {
        setPermissonCheck(true);
});
  

  }, []);




  function tokenCheck() {
  
  
    const token = localStorage.getItem("jwt");
  
    if (token) {
      return auth.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            console.log('токен проверен')
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setPermissonCheck(true);
        })
        
    } else if (loggedIn) {
      history.push('/movies');
    }
    else {
      setPermissonCheck(true);
    }

  };
  
  

  const handleRegister = (data) => {
    const {name, email, password} = data;
    return auth.register(name, email, password)
      .then(() => {
        history.push('/movies')
        auth.authorize(email, password)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            tokenCheck()
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
          tokenCheck();
          setLoggedIn(true);
         }
         history.push('/movies');
       })
       .catch((err) => {
        if (err) {
         setMessage('Что-то пошло не так...');
        }
      })
  }


  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    setLoading(false)
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
    const films = res.filter((movie)=>{
    return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
    })

    if (films.length === 0) {
      console.log("res")
      setMovies(films)
      setMessage('Ничего не найдено');
      setLoading(false)
     } 
    
     else {
    localStorage.setItem("movies", JSON.stringify(films));
    
    setMovies(films)
    setLoading(false)
    setMessage('');
     }
    
     })
    
    }
  

    function searchSavedMovie(evt){
      evt.preventDefault()
      console.log(evt.target[0].value)
      setLoading(true)
      api.getSavedMovies()
      .then(res=>{
      const savedFilms = res.filter((movie)=>{
      return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
      })
  
      if (savedFilms.length === 0) {
        console.log("res")
        setSavedMovies(savedFilms)
        setMessage('Ничего не найдено');
        setLoading(false)
       } 
      
       else {
      localStorage.setItem("savedMovies", JSON.stringify(savedFilms));
      
      setSavedMovies(savedFilms)
      setLoading(false)
      setMessage('');
       }
      
       })
      
      }


    function handleSaveMovie(movieData) {
    
      api
        .postSavedMovies(movieData)
        .then((newMovie) => {
          setSavedMovies([newMovie.data, ...savedMovies]);
          // props.setIsLiked(true)
          // setLiked(true)
        })
        .catch((err) => {
          console.log(err);
        })
      
    }




  
    if (!permissionsCheck){
      return null;
    }
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
  
    <Switch>

    <Route exact path="/">
      <Main loggedIn={loggedIn}/>
    </Route>


   
    <ProtectedRoute path="/movies" loggedIn={loggedIn} component= { Movies } movies={movies} onSubmit={searchMovie}  isLoading={isLoading} 
    message={message}  windowWidth={windowWidth} 
        handleSaveMovie={handleSaveMovie}
        savedMovies={savedMovies}

        // handleSaveMovie={props.handleSaveMovie}

              />

    <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component= { SavedMovies } 
    savedMovies={savedMovies}  setSavedMovies={setSavedMovies} message={message} 
    windowWidth={windowWidth}
    // handleDeleteMovie={props.handleDeleteMovie}
    setMyFilms={props.setMyFilms} myFilms={props.myFilms}
    onSubmit={searchSavedMovie}
    
    />
    <ProtectedRoute path="/profile" userData={userData} loggedIn={loggedIn} component={ Profile } onSignOut={handleSignOut} onUpdateUser={handleUpdateUser}/>

    <Route path="/signup">
        <Register onRegister={handleRegister} message={message}/>
      </Route>

      <Route path="/signin">
        <Login onLogin={handleLogin} message={message}/>
      </Route>
      <Route path="*" component= {NotFound} />
      </Switch>

</CurrentUserContext.Provider>
</>

);

}

export default App;

    
  
