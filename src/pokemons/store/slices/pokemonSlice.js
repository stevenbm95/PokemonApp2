import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState : {
    pokemons: [],
    isLoading: false,
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
    setFilterByName: (state, action) =>{
      state.filterByName = action.payload.filterByName
    }

  }
})

// Action creators are generated for each case reducer function
export const { startLoadinPokemons, setPokemons,setFilterByName} = pokemonSlice.actions;