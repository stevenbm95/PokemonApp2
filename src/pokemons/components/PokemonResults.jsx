import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritePokemons,setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useState } from 'react';
import { ButtonsAllFav } from './ButtonsAllFav';
import { ListPokemons } from './ListPokemons';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    // const {favoritePokemons, filterByName} = useSelector(state => state.pokemons);
    const [favoritePokemos, setfavoritePokemos] = useState([])
    const [listPokemons, setListPokemons] = useState(pokemons);
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        setListPokemons(pokemons);
    },[pokemons]);

    console.log(showList);

    const allPokemons = () => {
       
        setListPokemons(pokemons);
        setShowList(false);
        console.log(showList);
    }

    const favPokemons = () => {
       
        setShowList(true);
        const favPokes = pokemons.filter(pf => pf.isFavorite === true);
        setfavoritePokemos(favPokes);
        console.log(favPokes);
    }

    return (
        <>           
                <List
                    sx={{  maxHeight: 500, overflow: 'auto' }}
                    aria-label="contacts">
                        {showList ?
                        <ListPokemons allPokemons={favoritePokemos}/>
                  
                        :
                        <ListPokemons allPokemons={listPokemons}/>
                  }
                </List>
                <ButtonsAllFav allPokemons={allPokemons} favPokemons={favPokemons} />
        </>
    )
}
