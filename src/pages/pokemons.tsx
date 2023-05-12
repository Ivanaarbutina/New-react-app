import { useEffect, useState } from "react";

type PokemonTypeTypeType = {
  name:string;
  url:string;
};

type PokemonTypesType = {
  slot:number;
  type:PokemonTypeTypeType[];
};

type PokemonType = {
  id:number;
  name:string;
  types:PokemonTypesType;
};

type PokemonAbilityNames = {
  name:string;
};

type PokemonAbility = {
  name: string;
  url: string;
  names:PokemonAbilityNames[];
};

type BerrieType = {
  name: string;
  url: string;
};

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType>();
  const [pokemonAbility, setPokemonAbility] = useState<PokemonAbility>();
  const [searchValue, setsearchValue] = useState<string>("");
  const [berries, setBerries] = useState<BerrieType[]>([]);
  const [flag, setFlag] = useState<string>("");

  const searchPokemons = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
        getPokemonAbility(data.id);
      })
      .catch((error) => console.error(error));
  };

  //====================================================

  const getPokemonAbility = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/ability/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonAbility(data);
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
    fetch(`https://restcountries.com/v3.1/capital/zagreb`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].flags.png);
        setFlag(data[0].flags.png);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h2>Pokemons By Color</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setsearchValue(e.target.value)}
        />
        <button onClick={() => searchPokemons(searchValue)}>Search</button>
      </div>
      <div>
        {pokemonAbility && pokemonAbility.names.map((name) => {
          return <div>{name.name}</div>;
        })}
      </div>
      <div>
        <h2>Berries</h2>
        <div>
          {berries.map((berry) => {
            return (
              <div>
                <div> {berry.name}</div>
                <a href={berry.url}>Link</a>
              </div>
            );
          })}
        </div>
      </div>
      <h2>Flag</h2>
      <img src={flag} alt="flag"/>
    </div>
  );
};
export default Pokemons;
