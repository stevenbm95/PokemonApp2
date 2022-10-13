
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadinPokemons } from "./pokemonSlice";

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
                a
              });
        dispatch(setPokemons( {pokemons: pokemons } ));
    
    }
  }