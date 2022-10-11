import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import {MenuOutlined} from '@mui/icons-material'
export const NavBar = () => {
    const colorLetter = 'white';
  return (
    <AppBar position="fixed" 
        sx={{ backgroundColor: 'primary.red'}}
    >
        <Toolbar sx={{  color: `${colorLetter}`}}>
            <IconButton 
                
                sx={{  color: `${colorLetter}` , display: {sm : 'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container directition='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> Pokemon</Typography>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
