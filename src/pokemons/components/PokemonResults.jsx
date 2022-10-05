import {  Box, List,ListItem , ListItemButton,ListItemIcon , ListItemText  } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { FavPokesList } from './FavPokesList';
import { changeStatePokemon } from '../Helpers/changeStatePokemon';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesPokemons } from '../store/slices';


export const PokemonResults = ({pokemons}) => {

    const dispatch = useDispatch();
    const {favoritesPokemons} = useSelector(state => state.pokemons);

    const clickFavPoke = (p) => {

        const filtred = favoritesPokemons.map(pok => pok.name).includes(p.name);

        !filtred ?         
            dispatch( setFavoritesPokemons(
                    { favoritesPokemons: [...favoritesPokemons,p]} )
                    )  
        : false ;                  
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
                                        <StarIcon  sx={ {}}/>
                                    </ListItemIcon>             
                            </ListItemButton>
                        </ListItem>
                        )
                    }
            </List> 
            <FavPokesList newFavPoke={favoritesPokemons}/>
                {/* {
                favPokes.length > 0 ?  <FavPokesList favPokes={favPokes} setFavPokes = {setFavPokes}/>

              : false
            }   */}
        </Box>

    </>
  )
}
