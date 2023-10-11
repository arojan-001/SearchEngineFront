import React, { useState, useEffect } from 'react';

const SearchResult = ({ results }) => {

  return (
    <div className="search-results">
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
