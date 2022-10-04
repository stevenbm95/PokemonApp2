
export const getPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const resp = await fetch(url);
  const { results } = await resp.json();
  
  const pokemones = results.map(pokemon => {
	return pokemon = {
	
	  name: pokemon.name,
	  favoriteState: false
	}
  });


  return pokemones;
}
