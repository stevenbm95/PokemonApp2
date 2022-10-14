import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritePokemons,setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useState } from 'react';
import { ButtonsAllFav } from './ButtonsAllFav';
import { ListPokemons } from './ListPokemons';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const {favoritePokemons, filterByName} = useSelector(state => state.pokemons);
    const [stateFavoritePokemos, setStateFavoritePokemos] = useState([])
    const [listPokemons, setListPokemons] = useState(pokemons);
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        setListPokemons(pokemons);
    },[pokemons]);

    useEffect(() => {
        setStateFavoritePokemos(favoritePokemons);
    },[favoritePokemons]);



    const changeStatePokemon = ({ name, url, isFavorite }) => {
        
        const allPookemosUpdates = pokemons.map(po => {
            if (po.name === name) {
                return  { name, url, isFavorite }
            }
            return po;
        });    
        
 
        // dispatch(setPokemons({ pokemons: allPookemosUpdates }));
        
        setListPokemons(allPookemosUpdates);
        
    }

    
    
    const allPokemons = () => {
        
        setListPokemons(pokemons);
        setShowList(false);
        console.log(showList);
    }

    const favPokemons = () => {
       
        setShowList(true);
        // const favPokes = listPokemons.filter(pf => pf.isFavorite === true);
        setStateFavoritePokemos(favoritePokemons);
    }

    return (
        <>           
                <List
                    sx={{  maxHeight: 500, overflow: 'auto' }}
                    aria-label="contacts">
                        {showList ?
                        <ListPokemons allPokemons={stateFavoritePokemos} changeStatePokemon={changeStatePokemon}/>
                  
                        :
                        <ListPokemons allPokemons={listPokemons} changeStatePokemon={changeStatePokemon}/>
                  }
                </List>
                <ButtonsAllFav allPokemons={allPokemons} favPokemons={favPokemons} />
        </>
    )
}
