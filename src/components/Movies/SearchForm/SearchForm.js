import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

    
    function SearchForm (props) {
    

    return(
        <>
            <form className="search-form" onSubmit = {props.onSubmit}>   
                <div className="search-form__container">
                    <input type="text" required name="search" placeholder="Фильм" className="search-form__input"></input>
                    <button type="submit" className="search-form__button" onSubmit = {props.onSubmit}>Найти</button>
                </div>
                <div className="search-form__short-film">
                    <FilterCheckbox/>
                    <p className="search-form__short-film-paragraph">Короткометражки</p>
                </div>  
            </form>    
        </> 
    ) 
}

  
export default SearchForm;