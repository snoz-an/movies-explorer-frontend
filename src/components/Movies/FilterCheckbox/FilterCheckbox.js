import React from 'react';

function FilterCheckbox(props) {
  

    return (

<label htmlFor="checkbox" className="search-bar__switch">
            <input type="checkbox" id="checkbox" className="search-bar__checkbox" 
            // onChange={props.onChange}
            />
            <span className="search-bar__slider"></span>
</label>

    )
}

export default FilterCheckbox;