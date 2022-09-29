import {  Box, List,
    ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';


import StarIcon from '@mui/icons-material/Star';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import {  useState } from 'react';
>>>>>>> 9b00d9f175c39c1d1209a8ff8a9c8bb335b932c4


<<<<<<< HEAD
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


        
=======

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
>>>>>>> 9b00d9f175c39c1d1209a8ff8a9c8bb335b932c4
    </Box>
  )
}
