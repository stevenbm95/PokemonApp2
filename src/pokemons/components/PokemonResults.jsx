import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Favicon from '@mui/icons-material/Grade';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { FavPokesList } from './FavPokesList';
import { changeStatePokemon } from '../Helpers/changeStatePokemon';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesPokemons, setFilterByName } from '../store/slices';
import { useEffect, useState } from 'react';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const { filterByName, favoritesPokemons } = useSelector(state => state.pokemons);
    const [listPokemons, setListPokemons] = useState([]); 
    const [starColor, setStarColor] = useState('');

    useEffect(() => {
        setListPokemons(pokemons);
    }, [pokemons])
    
    

        

    const clickFavPoke = (p) => {
        const filtred = favoritesPokemons.map(pok => pok.name).includes(p.name);
        // !filtred ?
            
        //     dispatch(setFavoritesPokemons(
        //         { favoritesPokemons: [...favoritesPokemons, p] })
        //     )
        //     : false;

        if (!filtred){
            dispatch(setFavoritesPokemons(
                        { favoritesPokemons: [...favoritesPokemons, p] })
                     )
                     setStarColor('yellow');
        }
    }

    const allPokemons = (e) => {
        e.preventDefault();
        setListPokemons(pokemons);
        setFilterByName({filterByName:''});
    }

    const favPokemons = (e) => {
        e.preventDefault();
        setListPokemons(favoritesPokemons);
        setFilterByName({filterByName:''});
    }

    return (
        <>

            <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <List
                    sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin: 'auto', bgcolor: 'background.paper' }}
                    aria-label="contacts"
                >
                    {
                        filterByName.length > 0 ?
                        listPokemons.filter(pokemon => pokemon.name.includes(filterByName))
                                .map(
                                    (p) =>
                                        <ListItem key={p.name} disablePadding>
                                            <ListItemButton
                                                sx={{ mb: 1 }}
                                                onClick={() => { clickFavPoke(p, pokemons) }}  >
                                                <ListItemText primary={p.name} />
                                                <ListItemIcon >
                                                    <StarIcon onClick={() => setStarColor('yellow')} sx={{ color: starColor}} />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                )
                            :
                            listPokemons.map((p) =>
                                <ListItem key={p.name} disablePadding>
                                    <ListItemButton
                                        sx={{ mb: 1 }}
                                        onClick={() => { clickFavPoke(p, pokemons) }}  >
                                        <ListItemText primary={p.name} />
                                        <ListItemIcon >
                                            <StarIcon onClick={() =>   setStarColor('yellow')} sx={{ color: starColor}} />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )
                    }

                </List>

                <Box>
                    <Button variant="outlined"
                            startIcon={<ListIcon/>}
                            onClick={ e => 
                                allPokemons(e)
                            }
                            
                            
                            >
                       All
                    </Button>
                    <Button variant="contained" startIcon={<Favicon />}
                        onClick={
                            e => 
                            favPokemons(e)
                        }
                    >
                        Favorites
                    </Button>
                </Box>

                


{/* 
                {
                    favoritesPokemons.length > 0 ? <FavPokesList newFavPoke={favoritesPokemons} /> : false
                } */}


            </Box>

        </>
    )
}
