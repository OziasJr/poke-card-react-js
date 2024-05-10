export type PokemonAbilitiestype = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
export type PokemonFormstype = {
  name: string;
  url: string;
};
export type PokemonGameindicestype = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};
export type PokemonHeldItemsVersionDetailstype = {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
};
export type PokemonHeldItemstype = {
  item: {
    name: string;
    url: string;
  };
  version_details: PokemonHeldItemsVersionDetailstype[];
};
export type PokemonMovesVersionGroupDetailstype = {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
};
export type PokemonMovestype = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: PokemonMovesVersionGroupDetailstype[];
};
export type PokemonPastTypesTypestype = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type PokemonPastTypestype = {
  generation: {
    name: string;
    url: string;
  };
  types: PokemonPastTypesTypestype[];
};
export type PokemonStatstype = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
export type PokemonTypestype = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type Pokemontype = {
  abilities: PokemonAbilitiestype[];
  base_experience: number;
  forms: PokemonFormstype[];
  game_indices: PokemonGameindicestype[];
  height: number;
  held_items: PokemonHeldItemstype[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMovestype[];
  name: string;
  order: number;
  past_types: PokemonPastTypestype[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "x-y": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
      };
    };
  };
  stats: PokemonStatstype[];
  types: PokemonTypestype[];
  weight: number;
};

export type AllPokemonsResultType = {
  name: string;
  url: string;
};
export type AllPokemonsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: AllPokemonsResultType[];
};
