import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import { getPokemons } from "./pokemons/store/slices";
import { PokemonResults, Search } from './pokemons/components';
import { Grid, Paper , InputBase, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons} = useSelector(state => state.pokemons); 

  useEffect(() => {
    dispatch(getPokemons()); 
   
  }, []);


 
  return (

    <Grid sx={{             
      background: '#2222',
      margin: 'auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around', 
      flexDirection:' column',
      padding: 2,
      height: '100vh'
      }}>          
      <Search />
          
          <PokemonResults pokemons={pokemons}>

          </PokemonResults>
  
  </Grid>
 
  )
}
