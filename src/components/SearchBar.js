import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchQuery }) {
    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Pokémon..."
                onChange={handleSearch}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;
