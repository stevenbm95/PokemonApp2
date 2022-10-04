import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import { FavPokesList } from './FavPokesList';
import { changeStatePokemon } from '../Helpers/changeStatePokemon';


export const PokemonResults = ({pokemons}) => {

   
    console.log(pokemons);
    const [favPokes, setFavPokes] = useState([]);   
    const [starColor, setStarColor] = useState('');
    



    const clickFavPoke = (p, pokemons) => {
        const newFavPokes = changeStatePokemon(p, pokemons);
        setFavPokes(newFavPokes); 
    }
    const changeColor = (p,i) => {
        setStarColor('yellow');
    }

  return (
    <>
        <Box sx={{ width: '100%', display:'flex'}}>   
            <List 
                sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
                aria-label="contacts"
                >
                    {
                        pokemons.map((p)=>                      
                        <ListItem key={p.name} disablePadding>
                            <ListItemButton 
                                sx={{mb: 1}} 
                                onClick={()=>{ clickFavPoke(p, pokemons) }}  >
                                <ListItemText primary={p.name} />
                                    <ListItemIcon >
                                        <StarIcon  sx={ {color: starColor}}/>
                                    </ListItemIcon>             
                            </ListItemButton>
                        </ListItem>
                        )
                    }
            </List> 
                {
                favPokes.length > 0 ?  <FavPokesList favPokes={favPokes} setFavPokes = {setFavPokes}/>

              : false
            }  
        </Box>

    </>
  )
}
