export const changeStatePokemon = (p,pokemons) => {
    p.favoriteState =  !p.favoriteState     
    
    const newFavPoke = pokemons.filter(pf =>{return  pf.favoriteState });
  
    return newFavPoke
    }