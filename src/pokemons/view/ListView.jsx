import { Grid } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { PokemonResults, Search } from '../components';

export const ListView = () => {
    const {isLoading, pokemons} = useSelector(state => state.pokemons); 
  return (
    <Grid container direction='column' alignItems='center' justifyContent='space-between' >
        <Search/>
        <PokemonResults pokemons={pokemons}/>
        
    </Grid>
  )
}
