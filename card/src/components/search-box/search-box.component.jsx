import React from 'react'
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="SearchBox">
        <input type="search" className="search"
            placeholder={ placeholder }
            onChange={ handleChange } />
        </div>
    )
}


export default SearchBox;