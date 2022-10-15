
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByName } from '../store/slices';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalPokemon = ({ name }) => {
    const dispatch = useDispatch();

    const { statsPokemon } = useSelector(state => state.pokemons);
    const [open, setOpen] = useState(false);
    // const [showStatsPokemon, setShowStatsPokemon] = useState();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        // console.log(statsPokemon);
    }, [statsPokemon]);
    
    // const shoWInfo = () => {
    //     dispatch(getPokemonByName({name} ));
        
    //     //   console.log({weight,height,types})
    // }
   
    //  const {weight,height,types} = statsPokemon;
    //  const allTypes = types.map(types => {
       
    //     return types.type.name 
    //  });
    //  console.log(allTypes);

    return (
        <Grid container justifyContent='space-between'>
            <Button sx={{ color: 'black' }} onClick={() => {
                handleOpen()
            }

            }>{name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        pokemon
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span>Nombre:  {name}</span>
                        {/* <hr /> */}
                        {/* <span>Peso:  {weight}</span>
                        <hr />
                        <span>Altura:  {height}</span>
                        <hr />
                        <span>Tipos:  {allTypes}</span> */}
                    </Typography>
                </Box>
            </Modal>
        </Grid>
    );
}


