import React, { useState } from 'react';
import './Search.css'; // Import the CSS file for this component
import { getRequest } from '../Request';

const Search = ({setSearchResults}) => {
  const [searchValue, setSearchingValue] = useState("");
  const handleSearchClick = async () => {
    try {
      const response = await getRequest(searchValue); 
      if(response){
        console.log("response", response)
        setSearchResults(response)
      }
  
  } catch (error) {
    console.error('Error:', error);
  }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchingValue(e.target.value)}
        value={searchValue}
      />
      <button className="search-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default Search;
