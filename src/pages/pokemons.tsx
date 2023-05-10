import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  color: string;
  abilities: PokemonAbilitiesType[];
  url: string;
  id: string;
};

type PokemonColorType = {
  id: number;
  name: string;
};

type PokemonAbilitiesType = {
  is_hidden: true;
  slot: number;
  ability: PokemonAbilityType;
};

type PokemonAbilityType = {
  name: string;
  url: string;
};

type BerrieType = {
  name: string;
  url: string;
};

const Pokemons = () => {
  const [data, setData] = useState<PokemonType>();
  const [dataByColor, setDataByColor] = useState<PokemonColorType>();
  const [colorValue, setColorValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [berries, setBerries] = useState<BerrieType[]>([]);
  const [capitalCity, setCapitalCity] = useState<[]>([]);
  const [flag, setFlag] = useState<string>("");

  const getPokemons = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  //====================================================

  const getPokemonsByColor = (id: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setDataByColor(jsonData);
      })
      .catch((error) => console.error(error));
  };

  //=======================================================

  const getBerries = () => {
    fetch(`https://pokeapi.co/api/v2/berry`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((error) => console.log(error));
  };

  //===============================================

  const getCapitalCity = () => {
    fetch(`https://restcountries.com/v3.1/capital/tallinn`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPokemons("bulbasaur");
    getPokemonsByColor("3");
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h2>Pokemons</h2>
      <div>
        {data ? (
          <div>
            <div>{data.name}</div>
          </div>
        ) : (
          <div>Nema Pokemona</div>
        )}
      </div>
      <hr></hr>
      <h2>Pokemons By Color</h2>
      <div>
        {dataByColor ? <div>{dataByColor.name}</div> : <div>Nema Pokemona</div>}
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder=""
        />
        <button onClick={() => getPokemonsByColor(searchValue)}>Search</button>
      </div>
      <div>
        <h2>Berries</h2>
        <div>
          {berries.map((berry) => {
            return (
              <div>
                <div> {berry.name}</div>
                <a href=""></a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Pokemons;
