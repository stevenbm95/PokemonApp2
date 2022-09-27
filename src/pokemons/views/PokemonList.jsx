import {  Grid, Box, Paper , InputBase, IconButton, List,
     ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';



import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { PokemonResults, Search } from '../components';


export const PokemonList = () => {
    
  return (
    <Grid sx={{
            width: 500, height: 700, 
            background: '#2222',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            flexDirection:' column',
            padding: 2 }}>
                
                <Search/>
                <PokemonResults>

                </PokemonResults>
        
    </Grid>
  )
}
