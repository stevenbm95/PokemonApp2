
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadinPokemons } from "./pokemonSlice";

export const getPokemons =  () => {

    return async (dispatch, getState) => {
        dispatch( startLoadinPokemons() );
          // const url = `https://pokeapi.co/api/v2/pokemon/`;
        const {data} = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(data);  

    
        dispatch(setPokemons( {pokemons: data.results, favorite:false  } ));
    }
  }