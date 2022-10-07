import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Favicon from '@mui/icons-material/Grade';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesPokemons, setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useRef, useState } from 'react';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const { filterByName, favoritesPokemons } = useSelector(state => state.pokemons);
    const [listPokemons, setListPokemons] = useState([]); 
    const starColor = useRef('');
    
    useEffect(() => {
        setListPokemons(pokemons);

    }, [pokemons])
    
    const clickFavPoke = (p) => {

        const favorites =  listPokemons.filter(po => po.name != p.name);
        setListPokemons([...favorites,{
            name: p.name,
            url: p.url,
            isFavorite: p.isFavorite
            
        }]);
        
        console.log(favorites)
        

        // const addFavorite = listPokemons.map( pokemon =>{
        //     if(pokemon.name === p.name & p.isFavorite === false){
        //         return {
        //             name: pokemon.name,
        //             url: pokemon.url,
        //             isFavorite: true 
        //         }                
        //     } else {
        //         return {
        //             name: pokemon.name,
        //             url: pokemon.url,
        //             isFavorite: false 
        //         }  
        //     }
            
            
        //     return pokemon;
        // }
        // );
        
        // console.log(addFavorite)
        // console.log(p)
        
        // setListPokemons([...listPokemons,addFavorite]);
        
        
    }
    console.log(listPokemons);

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

                        listPokemons
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
                                            <StarIcon  sx={{ color: starColor}} />
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
