import { Box, Button } from "@mui/material";
import Favicon from '@mui/icons-material/Grade';
import ListIcon from '@mui/icons-material/FormatListBulleted';


export const ButtonsAllFav = ({allPokemons,favPokemons}) => {
  return (
    
    <Box>
            <Button variant="contained"
                sx={{ bgcolor: 'primary.red', color: 'white'}}
                startIcon={<ListIcon />}
                onClick={e => allPokemons(e) }
            >
                All
            </Button>
            <Button variant="contained" 
                 color='inherit'
                startIcon={<Favicon />}
                onClick={e => favPokemons(e)}
            >
                Favorites
            </Button>
    </Box>
  )
}
