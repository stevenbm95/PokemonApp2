
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { maxWidth } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import backGroundImage from '../../assets/images/Background.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
};

export const ModalPokemon = ({ name }) => {

    const { statsPokemon } = useSelector(state => state.pokemons);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    // }, [open]);
    
    const {weight,height,allTypes} = statsPokemon;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                    <Typography id="modal-modal-description" sx={{ p: '2rem' }}>
                        <span>Nombre:  {name}</span>
                        <hr />
                        <span>Peso:  {weight}</span>
                        <hr />
                        <span>Altura:  {height}</span>
                        <hr />
                        <span>Tipos:  {allTypes}</span>
                    </Typography>
                </Box>
            </Modal>
        </Grid>
    );
}


