import React, { useEffect, useState } from "react";
import { EuropeType } from "./../data/europe";
import { Link } from "react-router-dom";
import Left from "./../assets/left-side.svg";
import Right from "./../assets/right-side.svg";
import Button from "../components/button";

const Europe = () => {
  const [data, setData] = useState<EuropeType[]>([]);
  const [query, setQuery] = useState("");

  const getEurope = () => {
    let url = "https://restcountries.com/v3.1/region/europe";
    if (query) {
      url += `?name=${query}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    getEurope();
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getEurope();
  };

  const filteredData = data.filter((country) => {
    const name = country.name.common.toLowerCase();
    return name.includes(query.toLowerCase());
  });
  return (
    <div className="container">
      <h2>Europe</h2>
      <div className="europe">
        <form onSubmit={handleSubmit} className="europe__form">
          <input
            type="text"
            placeholder="Search country"
            value={query}
            onChange={handleChange}
            className="europe__input"
          />
          <button type="submit"> Search </button>
        </form>
        <div className="europe__table__wrapper">
          <table className="europe__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Flag</th>
                <th>Capital City</th>
                <th>Map</th>
                <th>Population</th>
                <th>Borders</th>
                <th>Car</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((country, index) => {
                return (
                  <tr key={index}>
                    <td>{country.name.common}</td>
                    <td>
                      <img src={country.flags.png} className="europe__img" />
                    </td>
                    <td>
                      {country.capital
                        ? country.capital.map((capital) => {
                            return capital;
                          })
                        : "undefined"}
                    </td>

                    <td>
                      <Link to={country.maps.googleMaps} target="_blank">
                        {" "}
                        Map
                      </Link>
                    </td>
                    <td>{country.population.toLocaleString("en-US")}</td>
                    <td>
                      {country.borders
                        ? country.borders.map((borders) => {
                            return borders + " ";
                          })
                        : "no borders"}
                    </td>
                    <td>
                      {country.car.side === "left" ? (
                        <img src={Left} />
                      ) : (
                        <img src={Right} />
                      )}
                      {country.car.signs.map((signs) => {
                        return signs + " ";
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Europe;
