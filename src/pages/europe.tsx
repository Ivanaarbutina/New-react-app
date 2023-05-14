import { useEffect, useState } from "react";
import People from "./../assets/people.svg";
import LeftRide from "./../assets/left-side.svg";
import RightRide from "./../assets/right-side.svg";

type EuropeType = {
  name: CountryType;
  flags: FlagsType;
  capital: string[];
  currencies: CurrencyType;
  population: number;
  borders: string[];
  maps: MapsType;
  car: CarType;
};

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

const Europe = () => {
  const [data, setData] = useState<EuropeType[]>([]);

  const getEurope = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getEurope();
  }, []);

  return (
    <div className="container">
      <h2>Europe</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Flag</th>
              <th>Currency</th>
              <th>Map</th>
              <th>Capital City</th>
              <th>Population</th>
              <th>Borders</th>
              <th>Cars</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country) => {
              console.log(country.borders);
              return (
                <tr>
                  <td>{country.name.common}</td>
                  <td>
                    <img className="table__img2" src={country.flags.png} />
                  </td>
                  <td>
                    {Object.keys(country.currencies).map((currency) => {
                      return currency;
                    })}
                  </td>
                  <td >
                    <a  className="table__link" href={country.maps.googleMaps} target="_blank">
                      Map
                    </a>
                  </td>
                  <td >
                    {country.capital.map((capital) => {
                      return capital;
                    })}
                  </td>
                  <td className="table__td">
                    <img className="table__img" src={People} alt="" />
                    {country.population.toLocaleString("en-US")}
                  </td>
                  <td>
                    {country.borders
                      ? country.borders.map((borders) => {
                          return borders + " ";
                        })
                      : "nema granica"}
                  </td>
                  <td>
                    {country.car.signs.map((sign) => {
                      return sign + " ";
                    })}
                    <span>
                      {country.car.side === "left" ? (
                        <img src={LeftRide} />
                      ) : (
                        <img src={RightRide} />
                      )}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Europe;
