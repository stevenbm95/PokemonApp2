import { Box, Button, Grid } from "@mui/material";
import Favicon from '@mui/icons-material/Grade';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from "react";


export const ButtonsAllFav = ({allPokemons,favPokemons}) => {
  
  const [changeColor, setChangeColor] = useState(true);
  
  return (
    
    <Grid container justifyContent='center'
              padding='1rem'
              bgcolor='#FFFFFF'
              boxShadow='0px -5px 4px rgba(0, 0, 0, 0.05)'
              >
            <Button 
                className="ButtonLink"
                variant="contained"

                sx={{                  
                bgcolor: changeColor ? 'primary.red' : 'primary.grey', 
                color: 'white',                 
                marginRight: '10px', textTransform: 'inherit'
                
                }}

                startIcon={<ListIcon />}

                onClick={() => {
                  setChangeColor(!changeColor)
                  allPokemons()
                } }
            >
                All
            </Button>
            <Button 
                variant="contained" 
                
                sx={{
                  bgcolor: changeColor ? 'primary.grey' :  'primary.red',
                  color: 'white', textTransform: 'inherit'
                
                }}

                startIcon={<Favicon />}
                
                onClick={() => {
                  setChangeColor(!changeColor)
                  favPokemons()

                }}
            >
                Favorites
            </Button>
    </Grid>
  )
}
