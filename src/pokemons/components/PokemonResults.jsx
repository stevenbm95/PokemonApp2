import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritePokemons,setFilterByName, setPokemons } from '../store/slices';
import { useEffect, useState } from 'react';
import { ButtonsAllFav } from './ButtonsAllFav';


export const PokemonResults = ({ pokemons }) => {

    const dispatch = useDispatch();
    const {favoritePokemons, filterByName} = useSelector(state => state.pokemons);
    const [listPokemons, setListPokemons] = useState(pokemons);
    const [favoritePokemonsList, setFavoritePokemonsList] = useState([]);

    useEffect(() => {
        setListPokemons(pokemons);
    },[pokemons]);

    // useEffect(() => {
    //     setFavoritePokemons();
    // },[favoritePokemons]);
    

   
    const clickFavPoke = ({ name, url, isFavorite }) => {

        const favorites = pokemons.map(po => {
            if (po.name === name) {
                return  { name, url, isFavorite }
            }
            return po;
        });
        
        if(isFavorite){
            setListPokemons(favorites)
            dispatch(setPokemons({ pokemons: favorites }))
        } else {
            const updateFavorites = favorites.filter(pf => pf.isFavorite === true);
            console.log(updateFavorites);
            
            dispatch(setFavoritePokemons({favoritePokemons: updateFavorites}  ));
            setListPokemons(favoritePokemons);
        }
        //     favPokemons();
        
        console.log(favoritePokemons);
      
        // // setListPokemons(favorites);
        // // const updateFav = favorites.filter(pf => pf.isFavorite)
        // // setFavoritePokemonsList(updateFav);
        // console.log(isFavorite);
    }
    // const despachar = ({ name, url, isFavorite }) => {
    //     const updateList = pokemons.map(po => {
    //         return po
    //     });

    //     console.log(updateList);
    //     // dispatch(setPokemons({ pokemons: [...pokemons,{ name, url, isFavorite }] }))
        
    // }

    const allPokemons = () => {
        // setFavoritePokemonsList([]);
        setListPokemons(pokemons);
    }

    const favPokemons = () => {

        const favPokes = listPokemons.filter(pf => pf.isFavorite === true);

        setListPokemons(favPokes);
    }

    const shoWInfo = (name,url) => {
        const stats = url
        // console.log(stats);s
    }
    return (
        <>           
                <List
                    sx={{  maxHeight: 500, overflow: 'auto' }}
                    aria-label="contacts"
                >
                    {/* {   

                        favoritePokemonsList.filter(pokemon => pokemon.name.includes(filterByName))
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
                                                            console.log(isFavorite)
                                                            isFavorite = !isFavorite
                                                            console.log(isFavorite)

                                                            clickFavPoke({ name, url, isFavorite })            
                                                        }}  />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                            )
                            }

                            <h1>separacion</h1> */}
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
                                                            clickFavPoke({ name, url, isFavorite });
                                                           
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
