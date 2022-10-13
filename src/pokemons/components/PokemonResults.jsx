import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useState } from 'react';
import { ButtonsAllFav } from './ButtonsAllFav';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const { filterByName} = useSelector(state => state.pokemons);
    const [listPokemons, setListPokemons] = useState([]);

    useEffect(() => {
        setListPokemons(pokemons);
    }, [pokemons]);

    const clickFavPoke = ({ name, url, isFavorite }) => {

        const favorites = listPokemons.map(po => {
            if (po.name === name) {
                return { name, url, isFavorite }
            }
            return po;
        });

        dispatch(setPokemons({ pokemons: favorites }));
    }

    const allPokemons = (e) => {
        e.preventDefault();
        setListPokemons(pokemons);
        setFilterByName({ filterByName: '' });
    }

    const favPokemons = (e) => {
        e.preventDefault();
        const favPokes = pokemons.filter(pf => pf.isFavorite === true);
        setListPokemons(favPokes);
        setFilterByName({ filterByName: '' });
    }

    const shoWInfo = (name,url) => {
        const stats = url
        console.log(stats);
    }
    return (
        <>
           
                <List
                    sx={{  maxHeight: 500, overflow: 'auto' }}
                    aria-label="contacts"
                >
                    {
                        listPokemons.filter(pokemon => pokemon.name.includes(filterByName))
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
                                                            clickFavPoke({ name, url, isFavorite })            
                                                        }}  />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                            )
                    }
                </List>
                <ButtonsAllFav allPokemons={allPokemons} favPokemons={favPokemons} />
        </>
    )
}
