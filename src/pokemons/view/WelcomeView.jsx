import { Button, Grid, Typography } from "@mui/material";
import { Link,Navigate } from "react-router-dom";
import PokemonImg from '../../assets/images/Pokemon.png';

export const WelcomeView = () => {
  return (
    <Grid 
        container 
        direction='column' 
        justifyContent='center' 
        alignItems='center'
        sx={ {width: 500, margin: 'auto'}}
        >
        <img className="PokemonImage" src={PokemonImg} alt="pikachu"/>
        <Typography variant='h3' sx={{pb: 4}}>Welcome to Pokédex</Typography>
        <Typography variant='p'>The digital encyclopedia created by Professor
             Oak is an invaluable tool to Trainers in the Pokémon world.</Typography>

         {/* <Button variant="contained"  to="/list" disableElevation sx={{ bgcolor: 'primary.red', color: 'primary.main', mt:6}}> 
        
          <Link                
                to="/list"
            >
                Get Started
            </Link>

        </Button>  */}

        <Link   component='button'
                variant="body2"          
                to="/list"
            >
                Get Started
            </Link>

         


    </Grid>
  )
}
