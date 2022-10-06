import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState : {
    pokemons: [{
      name: '',
      url:'',
      favorte: false
    }],
    isLoading: false,
    favoritesPokemons: [],
    filterByName: ''
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
    }, 
    setFilterByName: (state, action) =>{
      state.filterByName = action.payload.filterByName
    }

  }
})

// Action creators are generated for each case reducer function
export const { startLoadinPokemons, setPokemons, setFavoritesPokemons,setFilterByName} = pokemonSlice.actions;