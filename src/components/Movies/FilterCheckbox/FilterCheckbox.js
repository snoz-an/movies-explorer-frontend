import React from 'react';

function FilterCheckbox(props) {
  

    return (

<label htmlFor="checkbox" className="search-bar__switch">
            <input type="checkbox" id="checkbox" className="search-bar__checkbox" 
            // checked={props.isShortMovies}
            // onChange={props.handleToggleCheckbox}
            onClick={()=>{props.setShortMovies(!props.shortMovies)}}
            />
            <span className="search-bar__slider"></span>
</label>

    )
}

export default FilterCheckbox;