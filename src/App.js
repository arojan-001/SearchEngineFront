import React, { useState } from 'react';
import './App.css'; // You can adjust the file path as needed
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';
import TableComponent from './Components/TableComponent';
import { getRequest } from './Request';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Search setSearchResults={setSearchResults}/>
      <div className='Dashboard'>
        <div>
             <h1>All Terms With Docs</h1>
             <TableComponent />
        </div>
        <div>
        <h1>Search Results</h1>
            {searchResults && (
            <SearchResult results={searchResults} /> 
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
