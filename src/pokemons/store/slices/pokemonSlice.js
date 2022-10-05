import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState : {
    pokemons: [],
    isLoading: false,
    favoritesPokemons: [],
   },
  reducers: {
    startLoadinPokemons: (state, /* action */) => {
      state.isLoading = true;
    },
    setPokemons: ( state, action)=>{
      state.isLoading = false;
      state.pokemons = action.payload.pokemons
      
    }, 
    setFavoritesPokemons: (state, action) =>{
      state.favoritesPokemons = action.payload.favoritesPokemons
    }
  }
})

// Action creators are generated for each case reducer function
export const { startLoadinPokemons, setPokemons, setFavoritesPokemons} = pokemonSlice.actions;