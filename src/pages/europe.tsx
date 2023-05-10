import { useEffect, useState } from "react";

type EuropeType = {
  name: CountryType;
  flags: FlagsType;
  capital: string[];
  currencies: CurrencyType;
  population: number;
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
    <div>
      <h2>Europe</h2>
      <div>
        <table className="varijable__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Flag</th>
              <th>Currency</th>
              <th>Capital City</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country) => {
              return (
                <tr>
                  <td>{country.name.common}</td>
                  <td>
                    <img src={country.flags.png} />
                  </td>
                  <td>
                    {Object.keys(country.currencies).map((currency) => {
                      return currency;
                    })}
                  </td>
                  <td>
                    {country.capital.map((capital) => {
                      return capital;
                    })}
                  </td>
                  <td>{country.population}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Europe;
