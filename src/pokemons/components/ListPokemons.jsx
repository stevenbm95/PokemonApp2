import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, setFavoritePokemons, getPokemonByName } from '../store/slices';
import { ModalPokemon } from './ModalPokemon';


export const ListPokemons = ({ allPokemons }) => {
    const dispatch = useDispatch();
    const { filterByName, pokemons, favoritePokemons,statsPokemon } = useSelector(state => state.pokemons);

    const changeStatePokemons = ({ name, url, isFavorite }) => {
        const allPookemosUpdates = pokemons.map(po => {
            if (po.name === name) {
                console.log(name);

                return  { name, url, isFavorite }
            }
            return po;
        });
        dispatch(setPokemons({ pokemons: allPookemosUpdates }));
        // dispatch(getPokemonByName({name}));
        
        if (isFavorite) {
            const [newPokemons] = pokemons.filter(pf => pf.name === name).map(() => { return { name, url, isFavorite } });
            dispatch(setFavoritePokemons({ favoritePokemons: [...favoritePokemons, newPokemons] }));
        } else {
            const pokemon = favoritePokemons.filter(pf => pf.name != name).map(po => {
                po.name === name ?  { name, url, isFavorite }  : false;
                return po;  });
                dispatch(setFavoritePokemons({ favoritePokemons: pokemon }));
            }
        }
        
        
        // const shoWInfo = ({name, url}) => {
            //   dispatch(getPokemonByName({name}));
            
            //   console.log(entro);  
            // }
            const setInfoStats =({name}) => {
                dispatch(getPokemonByName({name}));
                const {weight,height,types} = statsPokemon
                console.log({weight,height,types});
     }
    
    return (
    
        allPokemons.filter(pokemon => pokemon.name.includes(filterByName))
            .map(({ name, url, isFavorite }) =>
            
                    <ListItem key={name}
                        disablePadding
                        sx={{ background: 'white', mb: 1 }}
                    >
                        <ListItemButton onClick={()=>setInfoStats({name})}>

                            <ListItemText primary={name}/>
                            <ModalPokemon name={name}/>
                            
                            
                            <ListItemIcon >
                                <StarIcon sx={{ color: isFavorite ? '#ECA539' : ' ' }}
                                    onClick={() => {
                                        isFavorite = !isFavorite
                                        changeStatePokemons({ name, url, isFavorite });

                                    }} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
            )

        
    )
}
