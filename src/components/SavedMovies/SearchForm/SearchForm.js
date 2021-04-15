import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
    
    function SearchForm (props) {
      
    return(
        <>
            <form className="search-form" onSubmit = {props.onSubmit}>   
                <div className="search-form__container">
                    <input type="text" required name="search" placeholder="Фильм" className="search-form__input"></input>
                    {/* <span className="profile__input-error profile__input-error_login">{errors.name || ''}</span> */}
                    {/* <button type="submit" className="search-form__button" onSubmit = {props.onSubmit} value={values.search} disabled={!isValid || !checkInputs() || isDisabled}>Найти</button> */}
                    <button type="submit" className="search-form__button" onSubmit = {props.onSubmit}>Найти</button>

                </div>
                <div className="search-form__short-film">
                    <FilterCheckbox 
                    setShortMovies={props.setShortMovies} shortMovies={props.shortMovies}
                    // isShortMovies={props.isShortMovies} handleToggleCheckbox={props.handleToggleCheckbox}
                    
                    />
                    <p className="search-form__short-film-paragraph">Короткометражки</p>
                </div>  
            </form>    
        </> 
    ) 
}

  
export default SearchForm;