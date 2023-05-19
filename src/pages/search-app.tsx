import React, { useState } from "react";

type SearchResult = {
  trackId: number;
  trackName: string;
  artistName: string;
};

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (term: string) => {
    fetch(` https://itunes.apple.com/search?term=${term}&entity=song`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setSearchResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        true;
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <h2>Search App</h2>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => {
            setIsLoading(true);
            fetchData(searchTerm);
          }}
        >
          Search
        </button>
        {isLoading ? (
          <div>Loading...</div>
        ) : searchResults.length === 0 ? (
          <div>Nema trazenog rezultata</div>
        ) : (
          <ul>
            {searchResults.map((result) => (
              <li key={result.trackId}>
                {result.trackName} - {result.artistName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchApp;
