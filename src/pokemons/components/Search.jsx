import {  Box, Paper , InputBase, IconButton, } from '@mui/material';  
import { useDispatch, useSelector } from 'react-redux/es/exports';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const Search = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons} = useSelector(state => state.pokemons); 
  const [searchByName, setSearchByName] = useState('');

  const onSearchByName = ({value}) => {    
    setSearchByName(value);
    const pokemonByName = pokemons.filter( pokemon => pokemon.name.includes(searchByName));
    console.log(pokemonByName);
              }  
    
  return (
    <Box sx={{}}>       
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
    </Box>
  )
}
