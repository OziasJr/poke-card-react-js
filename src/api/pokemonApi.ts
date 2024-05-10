import { AllPokemonsType, Pokemontype } from "../ts";

export const fetchPokemons = async (
  setPokemon: React.Dispatch<React.SetStateAction<AllPokemonsType | undefined>>
) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1281`);
  const response: AllPokemonsType = await request.json();
  setPokemon(response);
};

export const fetchPokemon = async (
  pokemon: string | number,
  setPokemon: React.Dispatch<React.SetStateAction<Pokemontype | undefined>>
) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const response: Pokemontype = await request.json();
  setPokemon(response);
};
