import {  Grid, Box, Paper , InputBase, IconButton, List,
     ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';



import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { PokemonResults, Search } from '../components';


export const PokemonList = ({pokemonsList}) => {
    
  return (
    <Grid sx={{
             
            background: '#2222',
            margin: 'auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-around', 
            flexDirection:' column',
            padding: 2,
            height: '100vh'
            }}>
                
                <Search/>
                <PokemonResults pokemonsList={pokemonsList}>

                </PokemonResults>
        
    </Grid>
  )
}
