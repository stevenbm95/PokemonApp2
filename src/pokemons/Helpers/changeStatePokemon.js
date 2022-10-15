
// import { useDispatch, useSelector } from 'react-redux';
// import { setPokemons, setFavoritePokemons } from '../store/slices';

// export const changeStatePokemons = ({ name = '', url ='', isFavorite }) => {

//     const dispatch = useDispatch();
//     const { pokemons, favoritePokemons } = useSelector(state => state.pokemons);

//     const allPookemosUpdates = pokemons.map(po => {
//         if (po.name === name) {
//             return  { name, url, isFavorite }
//         }
//         return po;
//     });
//     dispatch(setPokemons({ pokemons: allPookemosUpdates }))

//     if (isFavorite) {
//         const [newPokemons] = pokemons.filter(pf => pf.name === name).map(() => { return { name, url, isFavorite } }
//         );
//         dispatch(setFavoritePokemons({ favoritePokemons: [...favoritePokemons, newPokemons] }));

//         console.log(favoritePokemons)
//     } else {
//         console.log(favoritePokemons)
//         const pokemon = favoritePokemons.filter(pf => pf.name != name).map(po => {
//             if (po.name === name) {
//                 return { name, url, isFavorite }
//             }
//             return po;
//         });
//         console.log(pokemon);
//         dispatch(setFavoritePokemons({
//             favoritePokemons: pokemon
//         }));
//     }
// }