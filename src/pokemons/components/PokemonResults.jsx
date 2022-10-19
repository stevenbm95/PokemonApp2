import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ButtonsAllFav } from './ButtonsAllFav';
import { ListPokemons } from './ListPokemons';
import {List} from '@mui/material';


export const PokemonResults = ({ pokemons }) => {
 
    const { favoritePokemons } = useSelector(state => state.pokemons);
    const [stateFavoritePokemos, setStateFavoritePokemos] = useState([])
    const [listPokemons, setListPokemons] = useState(pokemons);
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        setListPokemons(pokemons);
    }, [pokemons]);

    useEffect(() => {
        setStateFavoritePokemos(favoritePokemons);
    }, [favoritePokemons]);


    const allPokemons = () => {
        setListPokemons(pokemons);
        setShowList(false);
    }

    const favPokemons = () => {
        setShowList(true);
        setStateFavoritePokemos(favoritePokemons);
    }

    return (
        <>
            <List sx={{ maxHeight: 500, overflow: 'auto' }} aria-label="contacts">
                { showList ?
                stateFavoritePokemos.length == 0 ? <h1> vacio</h1> :<ListPokemons allPokemons={stateFavoritePokemos} />
                :  <ListPokemons allPokemons={listPokemons} />
                }
            </List>
            <ButtonsAllFav allPokemons={allPokemons} favPokemons={favPokemons} />
        </>
    )
}
