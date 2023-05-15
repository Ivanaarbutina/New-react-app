import { useEffect, useState } from "react";
import LeftRide from "./../assets/left-side.svg";
import Rightside from "./../assets/right-side.svg";

type AsiaType ={
  name: CountryType;
  flags: FlagsType;
  capital: string[];
  currencies: CurrencyType;
  population: number;
  borders: string[];
  maps: MapsType;
  car: CarType;
}

type CarType = {
  signs: string[];
  side: string;
};

type MapsType = {
  googleMaps: string;
  openStreetMaps: string;
};

type CurrencyType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

type FlagsType = {
  png: string;
  svg: string;
};

type CountryType = {
  common: string;
};


const Asia = () => {

  const [data, setData] = useState<AsiaType[]>([]);
  const [query, setQuery] = useState("");

  const getAsia = ()=> {
    let url = "https://restcountries.com/v3.1/region/asia";
    if (query) {
      url += `?name=${query}`;
    }
    fetch(url)
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      console.log(data);
      setData(data); 
    })
  };

  useEffect (() => {
    getAsia();
  },[query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAsia();
  };

  const filteredData = data.filter((country) => {
    const name = country.name.common.toLowerCase();
    return name.includes(query.toLowerCase());
  });

  return(
    <div className="container">
      <h2>Asia</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital City</th>
            <th>Map</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((country) =>{
            return(
              <tr>
              <td>{country.name.common}</td>
              <td><img className="table__img2" src={country.flags.png}/></td>
              <td>
                {Object.keys(country.currencies).map((currencies) => {
                return currencies;
                })}
              </td>
              <td>{country.capital ? country.capital.map((capital) => {
                return capital;
              }) : ("undefined")}</td>
              <td>
                <a href={country.maps.googleMaps} target="_blank">Map</a>
              </td>
              <td>{country.population.toLocaleString("en-US")}</td>
              <td>{country.borders ? country.borders.map((borders) => {
                return borders + " ";
              }) : ("no borders")}</td>
              <td>
                {country.car.side === "left" ? (
                  <img src={LeftRide}/>
                ) : (
                  <img src={Rightside}/>
                )}
                {country.car.signs.map((signs) => {
                  return signs +" ";
                })}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Asia;