import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState : {
    pokemons: [],
    favoritePokemons: [],
    isLoading: false,
    filterByName: '',
    statsPokemon:{}
   },
  reducers: {
    startLoadinPokemons: (state, /* action */) => {
      state.isLoading = true;
    },
    setPokemons: ( state, action)=>{
      state.isLoading = false;
      state.pokemons = action.payload.pokemons
      
    },
    setFavoritePokemons: ( state, action)=>{
      state.isLoading = false;
      state.favoritePokemons = action.payload.favoritePokemons
      
    }, 
    setFilterByName: (state, action) =>{
      state.filterByName = action.payload.filterByName
    },
    setStatsPokemon: ( state, action)=>{
      state.isLoading = false;
      state.statsPokemon = action.payload.statsPokemon
      
    }

  }
})

// Action creators are generated for each case reducer function
export const { startLoadinPokemons, setPokemons,setFilterByName,setFavoritePokemons,setStatsPokemon} = pokemonSlice.actions;