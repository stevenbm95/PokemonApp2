import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import { changeStatePokemon } from '../Helpers/changeStatePokemon';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesPokemons } from "../store/slices";


export const FavPokesList = ({newFavPoke}) => {
    
    const dispatch = useDispatch();
    const {favoritesPokemons} = useSelector(state => state.pokemons);

    const deleteFavoritePokemon = (p) => {
        const selectedPokemon = favoritesPokemons.filter(pokemon => pokemon.name !== p.name);
        
        dispatch( setFavoritesPokemons({ favoritesPokemons: selectedPokemon})  );      
    }
    
  return (
    <List
    sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
    aria-label="contacts"
    >
        <h1>Favorites</h1>
        {
            newFavPoke.map((p,i)=>                      
            <ListItem key={p.name} disablePadding>
                <ListItemButton 
                    sx={{mb: 1}} 
                    onClick={()=>{ deleteFavoritePokemon(p); }}  >
                    <ListItemText primary={p.name} />
                        <ListItemIcon >
                            <StarIcon  sx={ {}}/>
                        </ListItemIcon>             
                </ListItemButton>
            </ListItem>
            )
        }
</List> 
  )
}
