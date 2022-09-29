import { useFetchPokemon } from "./pokemons/Hook/useFetchPokemon";
import { PokemonList } from "./pokemons/views/PokemonList"


export const PokemonApp = () => {
  const pokemonsList = useFetchPokemon();
  return (
    <PokemonList pokemonsList={pokemonsList}/>
  )
}
