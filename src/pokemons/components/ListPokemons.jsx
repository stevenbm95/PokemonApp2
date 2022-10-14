import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons,setFavoritePokemons } from '../store/slices';


export const ListPokemons = ({allPokemons,changeStatePokemon}) => {
    const dispatch = useDispatch();
    const {filterByName,pokemons,favoritePokemons} = useSelector(state => state.pokemons);


  const changeStatePokemons = ({name,url,isFavorite}) => {
        const allPookemosUpdates = pokemons.map(po => {
            if (po.name === name) {
                return  { name, url, isFavorite }
            }
            return po;
        });
        dispatch(setPokemons({ pokemons: allPookemosUpdates }))

        if(isFavorite){
            const [ newPokemons] =  pokemons.filter(pf => pf.name===name).map(() =>
                 {  return {name,url,isFavorite}}
                );
            dispatch(setFavoritePokemons({
                favoritePokemons: [...favoritePokemons,newPokemons]
                    })); 
                    
            console.log(favoritePokemons)
        } else {
            console.log(favoritePokemons)
            const pokemon =  favoritePokemons.filter(pf =>  pf.name != name).map(po => {
                if (po.name === name) {
                    return  { name, url, isFavorite }
                }
                return po;
            });
        console.log(pokemon);
      dispatch(setFavoritePokemons({
           favoritePokemons: pokemon
           })); 
        }
    }
    


  return (   
            allPokemons.filter(pokemon => pokemon.name.includes(filterByName))
                        .map(
                            ({name,url,isFavorite}) =>
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
                                                        isFavorite = ! isFavorite
                                                        changeStatePokemons({name,url,isFavorite});                                                       
                                                        
                                                    }}  />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
    
   
  )
  )
}
