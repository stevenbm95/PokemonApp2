import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';


import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';


export const PokemonResults = ({pokemonsList}) => {

   
    const [pokemons, setPokemons] = useState([pokemonsList]);
    
    useEffect(() => {
        setPokemons(pokemonsList);
        
    }, [pokemonsList]);
    
    const [favPokes, setFavPokes] = useState([]);   
  
  
    // const starActive =(p) =>{
    //     console.log(p);
        
    //     if(p.favoriteState ){

    //         setFavPokes([...favPokes,p]);
    //     }
       
    //     console.log(favPokes);

    //     // 
        
            
      
    // } 

console.log(favPokes);

  return (
    <Box sx={{ width: '100%'}}>   
        <List 
            sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
            aria-label="contacts"
            >
                {
                    pokemons.map((p,i)=>                      
                        <ListItem key={i} disablePadding>
                            <ListItemButton sx={{mb: 1}} onClick={()=>{
                                p.favoriteState =  !p.favoriteState
                                p.favoriteState ? setFavPokes([...favPokes,p]) : false;

                                }}  >
                                <ListItemText primary={p.name} />
                                    <ListItemIcon >
                                        <StarIcon  sx={{ color:'yellow'}}/>
                                    </ListItemIcon>             
                            </ListItemButton>
                        </ListItem>

                    )
                }
        </List>


        
    </Box>
  )
}
