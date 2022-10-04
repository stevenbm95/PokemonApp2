import { useFetchPokemon } from "./pokemons/Hook/useFetchPokemon";
import { PokemonList } from "./pokemons/views/PokemonList"
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from "react";
import { getPokemons } from "./pokemons/store/slices";



export const PokemonApp = () => {

  const dispatch = useDispatch();

  const {isLoading, pokemons} = useSelector(state => state.pokemons);
  

  useEffect(() => {
    dispatch(getPokemons());

    
  }, []);
  
  
  
  return (
    <PokemonList pokemons={pokemons}/>
  )
}
