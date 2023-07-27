import React, { useState } from "react";

type SearchResult = {
  trackName: string;
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  country: string;
  previewUrl: string;
  primaryGenreName: string;
};

const SearchApp = () => {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
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
      <div className="song__input__wrapper">
        <input
          className="song__input"
          placeholder="Enter a song name"
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
        </div>
        <div className="song__grid">
        {isLoading ? (
          <div>Loading...</div>
        ) : searchResults ? (
            searchResults.map((result, index) => {
              return(
              <div key={index} className="song__card">
               <img 
                  className="song__card__img"
                  src={result.artworkUrl100}
                  alt={`${result.artistName} - ${result.trackName}`}
               />
               <div className="song__card__body">
                <a 
                  href={result.artistViewUrl}
                  target={"_blank"}
                  className="song__card__name"
                >
                  {result.artistName} - {result.trackName}
                </a>
                <div className="song__card__genere">
                  {result.primaryGenreName}
                </div>
               </div>
               <audio controls>
                <source src={result.previewUrl} type="audio/mpeg"/>
                Your browser does not support the audio element.
               </audio>
              </div>
            ); 
          })
        ):( 
        <div>{error ? error : "Nema pronađenih rezultata"}</div>
        )}
        </div>
    
      
    </div>
  );
};

export default SearchApp;
