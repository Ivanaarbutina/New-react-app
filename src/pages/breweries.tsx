import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import doubleArow from "./../assets/double-arow.svg";
import doubleRight from "./../assets/double-right.svg";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataBySearch, setDataBySearch] = useState<BreweryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const PER_PAGE = 10;

  const getBreweries = (page : number) => {
    fetch(`https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${PER_PAGE}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setTotalPages(Math.ceil(jsonData.length / PER_PAGE));
      })
      .catch((error) => console.error(error));
  };
//==================================================================================
    const getBreweryByCity = (city: string) => {
      fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${PER_PAGE}&page=${currentPage}`)
        .then((response) => response.json())
        .then((jsonData) => {
          setDataByCity(jsonData);
          setTotalPages(Math.ceil(jsonData.length / PER_PAGE));
        })
        .catch((error) => console.error(error));
    };

//=================================================================================

    const getBrewerybySearch = (searchValue: string) => {
      fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${searchValue}&per_page=${PER_PAGE}&page=${currentPage}`)
        .then((response) => response.json())
        .then((jsonData) => {
          setDataBySearch(jsonData);
          setTotalPages(Math.ceil(jsonData.length / PER_PAGE));
        })
        .catch((error) => console.error(error));
    };


  useEffect(() => {
    getBreweries(currentPage);
    getBreweryByCity("san_diego");
    getBrewerybySearch("Heineken");
  }, [currentPage]);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <a key={i} href="#" className="pagination__number" onClick={() => handlePageClick(i)}>
        {i}
      </a>
    );
  }

    const handlePrevClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    console.log();

    const handleNextClick = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePageClick = (page: number) => {
      setCurrentPage(page);
    };
    console.log(handlePageClick);


  return (
    <div className="container">
      <h2>Breweries</h2>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
       
      </div>
      <h2>By City</h2>
      <div>
        {dataByCity.length> 0 ? (
          dataByCity.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
          <div className="pagination">
             <a  onClick={handlePrevClick}>
               <img src={doubleArow} alt="previous page" className="pagination__img" />
             </a>
              {pages}
             <a  onClick={handleNextClick}>
               <img src={doubleRight} alt="next page" className="pagination__img" />
              </a>
          </div>
         
      </div>
      <h2>By Search</h2>
      <div>
      <div >
          <input type="text"  onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue} placeholder=""/>
          <button onClick={() => getBrewerybySearch(searchValue)}>Search</button>
      </div>
        {dataBySearch.length> 0 ? (
          dataBySearch.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
    </div>
  );
};

export default Breweries;