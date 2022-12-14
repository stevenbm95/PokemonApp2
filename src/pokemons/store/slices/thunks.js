
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadinPokemons,setStatsPokemon } from "./pokemonSlice";

export const getPokemons =  () => {

    return async (dispatch, getState) => {
        dispatch( startLoadinPokemons() );
          // const url = `https://pokeapi.co/api/v2/pokemon/`;
        const {data} = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon/');
        const pokemons = data.results.map( pok => {
                return {
                  name: pok.name,
                  url: pok. url,
                  isFavorite: false
                }
                
              });
        dispatch(setPokemons( {pokemons: pokemons } ));
    
    }
  }

  export const getPokemonByName =  ({name}) => {
       return async (dispatch, getState) => {
        const {data} = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const {weight,height,types} = data;
        const allTypes =  types.map((tp,i) => (i >= 0 && i < types.length-1) ? `${tp.type.name} , ` : tp.type.name);
        const statsPokemon = {name,weight,height,allTypes};
        dispatch(setStatsPokemon( {statsPokemon: statsPokemon } ));
      
    }
  }


  