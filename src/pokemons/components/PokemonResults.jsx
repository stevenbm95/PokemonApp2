import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Favicon from '@mui/icons-material/Grade';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useState } from 'react';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const { filterByName, favoritesPokemons } = useSelector(state => state.pokemons);
    const [listPokemons, setListPokemons] = useState([]); 
    
    
    useEffect(() => {
        setListPokemons(pokemons);

    }, [pokemons])


    
    const clickFavPoke = ({name,url,isFavorite}) => {
       
        const favorites =  listPokemons.map( po => {
            if( po.name === name  ){                
                return {name,url,isFavorite}
            }            
            return po;
        });



        dispatch(setPokemons({pokemons:favorites}));        
    }

    const allPokemons = (e) => {
        e.preventDefault();
        
        setListPokemons(pokemons);
        setFilterByName({filterByName:''});
    }

    const favPokemons = (e) => {
        e.preventDefault();
        const favPokes = pokemons.filter( pf => pf.isFavorite === true);
        setListPokemons(favPokes);
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
                        // listPokemons.filter(pokemon => pokemon.name.includes(filterByName))
                        //         .map(
                        //             (p) =>
                        //                 <ListItem key={p.name} disablePadding>
                        //                     <ListItemButton
                        //                         sx={{ mb: 1 }}
                        //                         onClick={() => { clickFavPoke(p) }}  >
                        //                         <ListItemText primary={p.name} />
                        //                         <ListItemIcon >
                        //                             <StarIcon onClick={() => setStarColor('yellow')} sx={{ color: starColor}} />
                        //                         </ListItemIcon>
                        //                     </ListItemButton>
                        //                 </ListItem>
                        //         )

                        listPokemons.filter(pokemon => pokemon.name.includes(filterByName))
                        .map(
                            ({name,url,isFavorite}) =>
                                <ListItem key={name} disablePadding>
                                    <ListItemButton
                                        sx={{ mb: 1 }}
                                        onClick={() => {
                                                        isFavorite = !isFavorite
                                                      clickFavPoke({name,url,isFavorite})
                                                      
                                              }}  >
                                        <ListItemText primary={name} />
                                        <ListItemIcon >
                                            <StarIcon  sx={{ color: isFavorite ? 'yellow' : ' '}} />
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
