//import logo from '../../logo.svg';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'

function App(props) {


  return (
    <>
    <Switch>


      <Route exact path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route exact path="/movies">
        <Movies/>
      </Route>

      <Route exact path="/profile">
      <Header loggedIn/>
      <Profile/>
      </Route>

      <Route exact path="/signup">
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
      </Route>

      </Switch>

      
  </>
  
  );
    
  
}

export default App;
