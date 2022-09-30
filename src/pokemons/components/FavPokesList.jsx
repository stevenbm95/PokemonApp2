
export const FavPokesList = (favPokes) => {
  return (
    <Box sx={{ }}>   
            <List 
                sx={{ maxWidth: 360, maxHeight: 500, overflow: 'auto', margin:'auto', bgcolor: 'background.paper' }}
                aria-label="contacts"
                >
                    {
                        pokemons.map((p,i)=>                      
                            <ListItem key={i} disablePadding>
                                <ListItemButton sx={{mb: 1}} onClick={()=>{
                                    p.favoriteState =  !p.favoriteState
                                    p.favoriteState ? setFavPokes([...favPokes,p]) : false;

                                    }}  >
                                    <ListItemText primary={p.name} />
                                        <ListItemIcon >
                                            <StarIcon  sx={{ color:'yellow'}}/>
                                        </ListItemIcon>             
                                </ListItemButton>
                            </ListItem>

                        )
                    }
            </List>        
        </Box>
  )
}
