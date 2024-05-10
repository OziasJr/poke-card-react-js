import { useEffect, useRef, useState } from "react";
import { PokeCard } from "./components";
import { AllPokemonsType, Pokemontype } from "./ts";
import { fetchPokemon, fetchPokemons } from "./api/pokemonApi";
import { sortByName } from "./utils";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [pokemon, setPokemon] = useState<Pokemontype>();
  const [pokemons, setPokemons] = useState<AllPokemonsType>();
  const refSelect = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    fetchPokemons(setPokemons);
  }, []);

  useEffect(() => {
    console.log(pokemons, "pokemons");
  }, [pokemons]);

  const handleselectPokemon = () => {
    if (refSelect.current) {
      fetchPokemon(refSelect.current.value, setPokemon);
    }
  };

  return (
    <>
      <h3 className="fw-bold text-center">Pokémons</h3>
      <select className="form-select w-50 m-auto mb-3" aria-label="Default select example" onChange={handleselectPokemon} ref={refSelect}>
        <option value="">Selecione seu Pokémon</option>
        {pokemons?.results.sort(sortByName).map((pokemonResult, index) => {
          return (
            <option key={index} value={pokemonResult.name}>
              {pokemonResult.name}
            </option>
          );
        })}
      </select>
      {pokemon && <PokeCard pokemon={pokemon} />}
    </>
  );
}

export default App;
