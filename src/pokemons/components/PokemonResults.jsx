import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';


export const PokemonResults = ({pokemonsList}) => {

   
    const [pokemons, setPokemons] = useState([]);
    const [favPokes, setFavPokes] = useState([]);  
    const [starColor, setStarColor] = useState('');
    
    useEffect(() => {
        setPokemons(pokemonsList);        
    }, [pokemonsList]);

    useEffect(() => {
      
    }, [favPokes]);
    

    const changeStatePokemon = (p) => {
        p.favoriteState =  !p.favoriteState         
        
        const newFavPoke = pokemons.filter(pf =>{return  pf.favoriteState });
      
        setFavPokes(newFavPoke); 
        }
    const changeColor = (p,i) => {
        setStarColor('yellow');
    }
        console.log(favPokes);


  return (
    <>
        <Box sx={{ width: '100%'}}>   
            <List 
                sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
                aria-label="contacts"
                >
                    {
                        pokemons.map((p,i)=>                      
                        <ListItem key={p.name} disablePadding>
                            <ListItemButton 
                                sx={{mb: 1}} 
                                onClick={()=>{ changeStatePokemon(p)
                                    changeColor(p,i);
                                
                                }}  >
                                <ListItemText primary={p.name} />
                                    <ListItemIcon >
                                        <StarIcon  sx={ {color: starColor}}/>
                                    </ListItemIcon>             
                            </ListItemButton>
                        </ListItem>
                        )
                    }
            </List>        
        </Box>

    </>
  )
}
