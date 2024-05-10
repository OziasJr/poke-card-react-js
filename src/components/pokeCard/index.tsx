import React from "react";
import { Wrapper } from "./style";
import { Pokemontype } from "../../ts";
import '@mdi/font/css/materialdesignicons.min.css';

type PokeCardProps = {
  pokemon: Pokemontype;
};

const PokeCard: React.FC<PokeCardProps> = ({ pokemon }) => {
  const srcImage = `${pokemon.sprites.other.dream_world.front_default || "assets/img/pokeball.svg"}`;
  const bgcColor = pokemon.types.length > 0 ? pokemon.types[0].type.name : 'default';

  const abliltyPokemon = pokemon.abilities[0].ability.name;
  const hedlItemPokemon = pokemon.held_items.length > 0 ? pokemon.held_items[0].item.name : 'None';
  const movePokemon = pokemon.moves.length > 0 ? pokemon.moves[0].move.name : 'None';
  const rarityPokemon = pokemon.held_items.length > 0 ? pokemon.held_items[0].version_details[0].version.name : 'None';
  const espciesPokemon = pokemon.order;

  const namesPokemonInitial = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 'eevee', 'chikorita', 'cyndaquil', 'totodile', 'treecko', 'torchic', 'mudkip', 'turtwig', 'chimchar', 'piplup', 'snivy', 'tepig', 'oshawott', 'chespin', 'fennekin', 'froakie', 'rowlet', 'litten', 'popplio', 'grookey', 'scorbunny', 'sobble', 'sprigatito', 'fuecoco', 'quaxly']

  const namesPokemonFossil = ['omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'lileep', 'cradily', 'anorith', 'armaldo', 'cranidos', 'ramparos', 'shieldon', 'bastiodon', 'tirtouga', 'carracosta', 'archen', 'archeops', 'dracozolt', 'arctozolt', 'dracovish', 'arctovish']

  const nomesPokemonBaby = ['pichu', 'cleffa', 'igglybuff', 'togepi', 'tyrogue', 'smoochum', 'elekid', 'magby', 'azurill', 'wynaut', 'budew', 'chingling', 'bonsly', 'mime-jr', 'happiny', 'munchlax', 'riolu', 'mantyke', 'toxel']

  const namePokemonLegendary = ['articuno', 'zapdos', 'moltres', 'mewtwo', 'raikou', 'entei', 'suicune', 'lugia', 'ho-oh', 'regirock', 'regice', 'registeel', 'latias', 'latios', 'kyogre', 'groudon', 'rayquaza', 'uxie', 'mesprit', 'azelf', 'dialga', 'palkia', 'heatran', 'regigigas', 'giratina-origin', 'giratina-altered', 'cresselia', 'cobalion', 'terrakion', 'virizion', 'tornadus-incarnate','tornadus-therian', 'thundurus-incarnate', 'thundurus-therian', 'reshiram', 'zekrom', 'landorus-incarnate', 'landorus-therian', 'kyurem', 'xerneas', 'yveltal', 'zygarde-complete', 'zygarde-10', 'zygarde-10-power-construct', 'zygarde-50', 'zygarde-50-power-construct', 'type-null', 'silvally', 'tapu-koko', 'tapu-lele', 'tapu-bulu', 'tapu-fini', 'cosmog', 'cosmoem', 'solgaleo', 'lunala', 'necrozma', 'zacian', 'zamazenta', 'eternatus', 'kubfu', 'urshifu-rapid-strike', 'urshifu-rapid-strike-gmax', 'urshifu-single-strike', 'urshifu-single-strike-gmax', 'regieleki', 'regidrago', 'glastrier', 'spectrier', 'calyrex', 'enamorus-incarnate', 'enamorus-therian', 'wo-chien', 'chien-pao', 'ting-lu', 'chin-yu', 'koraidon', 'miraidon']

  const namePokemonMythical = ['mew', 'celebi', 'jirachi', 'deoxys-attack', 'deoxys-defense', 'deoxys-normal', 'deoxys-speed', 'phione', 'manaphy', 'darkrai', 'shaymin-land', 'shaymin-sky', 'arceus', 'victini', 'keldeo-ordinary', 'keldeo-resolute', 'meloetta-aria', 'meloetta-pirouette', 'genesect', 'diancie', 'hoopa', 'volcanion', 'magearna', 'magearna-original', 'marshadow', 'zeraora', 'meltan', 'melmetal', 'melmetal-gmax', 'zarude']

  const namePokemonUltra = ['nihilego', 'buzzwole', 'pheromosa', 'xurkitree', 'celesteela', 'kartana', 'guzzlord', 'poipole', 'naganadel', 'stakataka', 'blacephalon']

  let bgcStyle: React.CSSProperties = {};
  let bgcSimbolStyle: React.CSSProperties = {};
  let lineHeightSimbolStyle: React.CSSProperties = {};
  let icon: string;
  let pokemonSimbol = '';
  let generationPokemon = '';

  if (namesPokemonInitial.includes(pokemon.name)) {
    pokemonSimbol = '†';
    bgcSimbolStyle = { background: 'rgb(159, 202, 223)' };
    lineHeightSimbolStyle = { lineHeight: '40px' };
  } else if (namesPokemonFossil.includes(pokemon.name)) {
    pokemonSimbol = '~';
    bgcSimbolStyle = { background: 'rgb(204, 223, 220)' };
    lineHeightSimbolStyle = { lineHeight: '35px' };
  } else if (nomesPokemonBaby.includes(pokemon.name)) {
    pokemonSimbol = '※';
    bgcSimbolStyle = { background: 'rgb(247, 217, 211)' };
    lineHeightSimbolStyle = { lineHeight: '35px' };
  } else if (namePokemonLegendary.includes(pokemon.name)) {
    pokemonSimbol = '‡';
    bgcSimbolStyle = { background: 'rgb(232, 148, 131)' };
    lineHeightSimbolStyle = { lineHeight: '40px' };
  } else if (namePokemonMythical.includes(pokemon.name)) {
    pokemonSimbol = '♭';
    bgcSimbolStyle = { background: 'rgb(220, 214, 119)' };
    lineHeightSimbolStyle = { lineHeight: '35px' };
  } else if (namePokemonUltra.includes(pokemon.name)) {
    pokemonSimbol = '♯';
    bgcSimbolStyle = { background: 'rgb(183, 163, 195)' };
    lineHeightSimbolStyle = { lineHeight: '35px' };
  } else if (pokemon.name === 'great-tusk') {
    pokemonSimbol = '§';
    bgcSimbolStyle = { background: 'rgb(212, 242, 206)' };
    lineHeightSimbolStyle = { lineHeight: '35px' };
  } else {
    pokemonSimbol = 'x';
    bgcSimbolStyle = { background: 'rgb(225, 225, 225)' };
    lineHeightSimbolStyle = { lineHeight: '30px' };
  }

  if (pokemon.order <= 149) {
    generationPokemon = 'Genaration-I';
  } else if (pokemon.order > 149 && pokemon.order <= 346) {
    generationPokemon = 'Genaration-II';
  } else if (pokemon.order > 346 && pokemon.order <= 516) {
    generationPokemon = 'Genaration-III';
  } else if (pokemon.order > 516 && pokemon.order <= 608) {
    generationPokemon = 'Genaration-IV';
  } else if (pokemon.order > 608 && pokemon.order <= 779) {
    generationPokemon = 'Genaration-V';
  } else if (pokemon.order > 779 && pokemon.order <= 867) {
    generationPokemon = 'Genaration-VI';
  } else if (pokemon.order > 867 && pokemon.order <= 990) {
    generationPokemon = 'Genaration-VII';
  } else if (pokemon.order > 990 && pokemon.order <= 1094) {
    generationPokemon = 'Genaration-VIII';
  } else if (pokemon.order == -1) {
    generationPokemon = 'Genaration-IX';
  }

  switch (bgcColor) {
    case 'electric':
      bgcStyle = { background: 'linear-gradient(to right, rgba(239, 223, 13, 0.9), rgba(234, 225, 123, 0.9))' };
      icon = 'mdi mdi-flash';
      break;
    case 'steel':
      bgcStyle = { background: 'linear-gradient(to right, rgba(69, 69, 76, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-webpack';
      break;
    case 'fairy':
      bgcStyle = { background: 'linear-gradient(to right, rgba(69, 69, 76, 0.9), rgba(193, 41, 138, 0.9))' };
      icon = 'mdi mdi-auto-fix';
      break;
    case 'normal':
      bgcStyle = { background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(222, 223, 217, 0.9))' };
      icon = 'mdi mdi-radiobox-marked';
      break;
    case 'ice':
      bgcStyle = { background: 'linear-gradient(to right, rgba(50, 208, 235, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-snowflake';
      break;
    case 'ground':
      bgcStyle = { background: 'linear-gradient(to right, rgba(120, 82, 63, 0.9), rgba(96, 102, 76, 0.9))' };
      icon = 'mdi mdi-image-filter-hdr';
      break;
    case 'water':
      bgcStyle = { background: 'linear-gradient(to right, rgba(6, 73, 199, 0.9), rgba(100, 184, 211, 0.9))' };
      icon = 'mdi mdi-water';
      break;
    case 'fire':
      bgcStyle = { background: 'linear-gradient(to right, rgba(227, 47, 47, 0.9), rgba(225, 108, 0, 0.9))' };
      icon = 'mdi mdi-fire';
      break;
    case 'grass':
      bgcStyle = { background: 'linear-gradient(to right, rgba(70, 199, 6, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-leaf';
      break;
    case 'flying':
      bgcStyle = { background: 'linear-gradient(to right, rgba(6, 73, 199, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-twitter';
      break;
    case 'fighting':
      bgcStyle = { background: 'linear-gradient(to right, rgba(6, 73, 199, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-sword-cross';
      break;
    case 'poison':
      bgcStyle = { background: 'linear-gradient(to right, rgba(6, 73, 199, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-flask-empty';
      break;
    case 'rock':
      bgcStyle = { background: 'linear-gradient(to right, rgba(67, 72, 82, 0.9), rgba(229, 231, 224, 0.9))' };
      icon = 'mdi mdi-diamond';
      break;
    case 'psychic':
      bgcStyle = { background: 'linear-gradient(to right, rgba(77, 16, 171, 0.9), rgba(179, 16, 243, 0.9))' };
      icon = 'mdi mdi-eye';
      break;
    case 'bug':
      bgcStyle = { background: 'linear-gradient(to right, rgba(83, 211, 159, 0.9), rgba(213, 223, 180, 0.9))' };
      icon = 'mdi mdi-bug';
      break;
    case 'ghost':
      bgcStyle = { background: 'linear-gradient(to right, rgba(41, 56, 84, 0.9), rgba(61, 65, 50, 0.9))' };
      icon = 'mdi mdi-ghost';
      break;
    case 'dragon':
      bgcStyle = { background: 'linear-gradient(to right, rgba(205, 134, 0, 0.9), rgba(255, 249, 0, 0.9))' };
      icon = 'mdi mdi-biohazard';
      break;
    case 'dark':
      bgcStyle = { background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(164, 169, 148, 0.9))' };
      icon = 'mdi mdi-skull';
      break;
    default:
      bgcStyle = { background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(186, 211, 100, 0.9))' };
      icon = 'mdi mdi-eye';
      break;
  }

  return (
    <Wrapper>
      <div className="pokemon-div" style={bgcStyle}>
        <div className="pokemon-header">
          <div className="pokemon-types">
            {/* {pokemon.types.map((type) => {
              return (
                <div key={type.slot} className="pokemon-type text-center" style={bgcStyle}>
                  {type.type.name}
                </div>
              );
            })} */}
            {pokemon.types.length > 0 ? <div className="pokemon-type text-center" style={bgcStyle}>
              {pokemon.types[0].type.name}
            </div> : 'default'}
          </div>
          <div className="pokemon-before-name">
            <div className="pokemon-name" style={bgcStyle}>{pokemon.name}</div>
          </div>
          <div className="pokemon-base-experience">
            <p>ps</p>
            <span>{pokemon.base_experience ? pokemon.base_experience : 'X'}</span>
            <div className="div-icon" style={bgcStyle}>
              <span className={`${icon} fs-4`}></span>
            </div>
          </div>
        </div>
        <div className="pokemon-simbol">
          <span className="pokemon-simbol-span" style={{ ...bgcSimbolStyle, ...lineHeightSimbolStyle }}>
            {pokemonSimbol}
          </span>
        </div>
        <div className="div-src">
          <img className="image-src" src={srcImage} alt="Imagem de Pokémon" />
        </div>
        <div className="pokemon-footer">
          <div className="pokemon-footer-top">
            <div className="held-item-div" style={bgcStyle}>{hedlItemPokemon}</div>
            <div className="ability-div" style={bgcStyle}>{abliltyPokemon}</div>
            <div className="move-div" style={bgcStyle}>{movePokemon}</div>
          </div>
          <div className="pokemon-footer-bottom">
            <div className="rarity-div" style={bgcStyle}>{rarityPokemon}</div>
            <div className="generation-div" style={bgcStyle}>{generationPokemon}</div>
            <div className="species-div" style={bgcStyle}>{espciesPokemon}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PokeCard;
