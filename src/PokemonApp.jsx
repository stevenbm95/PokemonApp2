import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import { getPokemons } from "./pokemons/store/slices";
import { PokemonResults, Search } from './pokemons/components';
import { Grid, Paper , InputBase, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons} = useSelector(state => state.pokemons); 
  const [searchByName, setSearchByName] = useState('');

  useEffect(() => {
    dispatch(getPokemons());    
  }, []);

  const onSearchByName = ({value}) => {    
    setSearchByName(value);
    const pokemonByName = pokemons.filter( pokemon => pokemon.name.includes(searchByName));
    console.log(pokemonByName);
              }  
  return (

    <Grid sx={{             
      background: '#2222',
      margin: 'auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around', 
      flexDirection:' column',
      padding: 2,
      height: '100vh'
      }}>          
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >        
          <InputBase             
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              onChange={e => onSearchByName(e.target) }
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>        
        </Paper>
          
          <PokemonResults pokemons={pokemons}>

          </PokemonResults>
  
  </Grid>
 
  )
}
