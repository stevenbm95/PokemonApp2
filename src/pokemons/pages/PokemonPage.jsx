import { Grid } from '@mui/material';
import {WelcomeView} from '../view';

export const PokemonPage = () => {
  return (
    <Grid sx={{ backgroundColor: 'primary.main',
                minHeight: '100vh',
                pt: 9}}>
        <WelcomeView/>
    </Grid>
  )
}
