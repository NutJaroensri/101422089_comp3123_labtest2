import React from 'react';


function Search({ city, onCityChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={onCityChange}
      />
    </div>
  );
}

export default Search;