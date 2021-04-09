//import logo from '../../logo.svg';
import React from 'react';
import { Route, Switch, Redirect, withRoute, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


import CurrentUserContext from  '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import api from '../../utils/api';
import MoviesApi from '../../utils/MoviesApi';

import * as auth from '../../utils/auth';

function App(props) {

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

  

  function searchMovie(evt){
    evt.preventDefault()
    console.log(evt.target[0].value)
    MoviesApi.getInitialCards()
    .then(res=>{
    console.log(res)
    localStorage.setItem(res, JSON.stringify(res));
    const films = res.filter((movie)=>{
    return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
    })
    
    setMovies(films)
    })
    
    }



  
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
   
    {/* <ProtectedRoute exact path="/movies" loggedIn={loggedIn} component= { Movies }  movies={movies} onSubmit={handleSubmit} onHandleInputChange = {handleInputChange}/> */}
    <ProtectedRoute exact path="/movies" loggedIn={loggedIn} component= { Movies } movies={movies} onSubmit={searchMovie}
              
              />

    <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn} component= { SavedMovies }  />
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

      

      {/* <Route exact path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route exact path="/movies">
        <Movies/>
      </Route>

      <Route exact path="/profile">
      <Header loggedIn/>
      <Profile/>
      </Route> */}

      

      {/* <Route exact path="/signup">
        <Register />
      </Route>

      <Route exact path="/signin">
        <Login />
      </Route>

      <Route exact path="/">
        <Header/>
        <Main/>
        
      </Route>

      <Route exact path="*">
        <NotFound />
      </Route> */}
     
        



  // return (
  //   <>
  //   <Switch>


  //     <Route exact path="/saved-movies">
  //       <SavedMovies />
  //     </Route>

  //     <Route exact path="/movies">
  //       <Movies/>
  //     </Route>

  //     <Route exact path="/profile">
  //     <Header loggedIn/>
  //     <Profile/>
  //     </Route>

  //     <Route exact path="/signup">
  //       <Register />
  //     </Route>

  //     <Route exact path="/signin">
  //       <Login />
  //     </Route>

    

  //     <Route exact path="/">
  //       <Header/>
  //       <Main/>
        
  //     </Route>

  //     <Route exact path="*">
  //       <NotFound />
  //     </Route>

  //     </Switch>

      
  // </>
  
  // );


    
  
