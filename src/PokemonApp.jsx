import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import { getPokemons } from "./pokemons/store/slices";
import { PokemonResults, Search } from './pokemons/components';
import { Grid, Paper , InputBase, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
import { PokemonLayout } from './pokemons/layout/PokemonLayout';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons} = useSelector(state => state.pokemons); 

  useEffect(() => {
    dispatch(getPokemons()); 
   
  }, []);


 
  return (
    <AppTheme>
      <PokemonLayout>
        <AppRouter />
        <Grid 
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: '100vh' , backgroundColor: 'primary.main', padding: 4 }}
        >          
          <Search />
          <PokemonResults pokemons={pokemons}/>
      
        </Grid>
        </PokemonLayout> 
    </AppTheme> 
  )
}
