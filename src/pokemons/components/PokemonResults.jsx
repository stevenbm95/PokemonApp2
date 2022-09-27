import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';


import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

export const PokemonResults = () => {

    const [pokemons, setPokemons] = useState([
        {
            name: 'pokemon 1',
            isActive: false
            },
            {
                name: 'pokemon 2',
                isActive: false
            },
             {
                name: 'pokemon 3',
                isActive: false
            }
             ]);

             const [favPokes, setfavPokes] = useState([])

    

  
       const starActive =(p) =>{
        p.isActive = !p.isActive;
        
      //  setfavPokes(...favPokes, [{p.name, p.isActive}]);

            
            
        console.log(p);
            
        } 

  


  return (
    <Box sx={{ width: '100%'}}>
   
        <List
            sx={{ width: '100%', maxWidth: 360,margin:'auto', bgcolor: 'background.paper' }}
            aria-label="contacts"
            >
                {
                    pokemons.map((p)=>
                      
                        <ListItem key={p.name} disablePadding>
                            <ListItemButton sx={{mb: 1}} >
                                <ListItemText primary={p.name} />
                                    <ListItemIcon onClick={()=>starActive(p)} >
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
