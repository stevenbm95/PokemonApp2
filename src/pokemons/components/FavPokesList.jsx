import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import { changeStatePokemon } from '../Helpers/changeStatePokemon';


export const FavPokesList = ({favPokes}) => {



    const clickDeletFavPoke = (p,favPokes) => {
        
        const newFavPokes = changeStatePokemon(p, favPokes);
        setFavPokes(newFavPokes); 

    }
  return (
    <List
    sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
    aria-label="contacts"
    >
        {
            favPokes.map((p,i)=>                      
            <ListItem key={p.name} disablePadding>
                <ListItemButton 
                    sx={{mb: 1}} 
                    onClick={()=>{ clickDeletFavPoke(p,favPokes); }}  >
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
