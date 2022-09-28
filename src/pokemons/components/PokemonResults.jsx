import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';


import StarIcon from '@mui/icons-material/Star';
import {  useState } from 'react';

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

             const [favPokes, setfavPokes] = useState([]);
             const [starColor, setstarColor] = useState(' ');
      
             
         const starActive =(p) =>{
             
             p.isActive = !p.isActive;
             if(p.isActive){
                console.log(p);
                setfavPokes([{name: p.name, isActive: p.isActive}]);
                console.log(favPokes);
    
           } else{
                return
           }

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
                                    <ListItemIcon onClick={(e)=>{ starActive(p);}} >
                                        <StarIcon  sx={{ color: `${ starColor }`}}/>
                                </ListItemIcon>             
                            </ListItemButton>
                        </ListItem>                       
                    )
                }           
        </List>
    </Box>
  )
}
