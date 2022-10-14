import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from '../store/slices';


export const ListPokemons = ({allPokemons}) => {
    const dispatch = useDispatch();
    const {filterByName} = useSelector(state => state.pokemons);


     const changeStatePokemon = ({ name, url, isFavorite }) => {

        
            const favorites = allPokemons.map(po => {
                if (po.name === name) {
                    return  { name, url, isFavorite }
                }
                return po;
            });    

            isFavorite ?
            dispatch(setPokemons({ pokemons: favorites }))
            :  dispatch(setPokemons({ pokemons: [...allPokemons,favorites] }));
         
    }

  return (   
            allPokemons.filter(pokemon => pokemon.name.includes(filterByName))
            .map(
                ({ name, url, isFavorite }) =>
                    <ListItem key={name}
                              disablePadding
                              sx={{background: 'white', mb: 1 }}
                              >
                        <ListItemButton>
                            <ListItemText primary={name}
                                onClick={() => shoWInfo(name, url)}    />
                            <ListItemIcon >
                                <StarIcon sx={{ color: isFavorite ? '#ECA539' : ' ' }}
                                         onClick={() => {
                                            isFavorite = !isFavorite
                                            changeStatePokemon({ name, url, isFavorite });
                                            // dispatch(setPokemons({ pokemons: { name, url, isFavorite } }))         
                                        }}  />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
    
   
  )
  )
}
