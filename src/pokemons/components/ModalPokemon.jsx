
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import backGroundImage from '../../assets/images/Background.png';
import StarIcon from '@mui/icons-material/Star';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export const ModalPokemon = ({ name, isFavorite }) => {

    const { statsPokemon } = useSelector(state => state.pokemons);
    const [open, setOpen] = useState(false);
        
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const {weight,height,allTypes} = statsPokemon;

    return (
        <Grid container justifyContent='space-between'>
            <Button sx={{ color: 'black' }}
                    onClick={() => {handleOpen()}}
                    >{name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={  style }>
                <img src={backGroundImage} className="backgroundModalImage" alt="" />
                    <Typography id="modal-modal-description" sx={{ p: '2rem', width: '100%' }}>
                        <span>Nombre:  {name}</span>
                        <hr />
                        <span>Peso:  {weight}</span>
                        <hr />
                        <span>Altura:  {height}</span>
                        <hr />
                        <span>Tipos:  {allTypes}</span>
                    </Typography>
                    <Box sx={{display:'flex', width: '70%', justifyContent: 'space-around', pb: '1rem'}}>
                    <Button
                        className="ButtonLink"
                        variant="contained"
                        sx={{                  
                        bgcolor: 'primary.red',
                        color: 'white',                 
                        marginRight: '10px',                
                        }}> Share to my friends</Button>

                        <StarIcon sx={{ color: isFavorite ? '#ECA539' : 'rgba(0, 0, 0, 0.54)' }}/>
                        </Box>
                </Box>
            </Modal>
        </Grid>
    );
}


