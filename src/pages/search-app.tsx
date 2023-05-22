import React, { useState } from "react";

type SearchResult = {
  trackId: number;
  trackName: string;
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  country: string;
  previewUrl: string;
  primaryGenreName: string;
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
            searchResults.map((result, index) => (
              <div key={index}>
               <img className=""
               src={result.artworkUrl100}
               alt={`${result.artistName} - ${result.trackName}`}
               />
               <div>
                <a 
                href={result.artistViewUrl}
                target={"_blank"}
                >
                  {result.artistName} - {result.trackName}
                </a>
                <div>{result.primaryGenreName}</div>
               </div>
               <audio controls>
                <source src={result.previewUrl} type="audio/mpeg"/>
                Your browser does not support the audio element.
               </audio>
              </div>
            )))}
      </div>
    </div>
  );
};

export default SearchApp;
