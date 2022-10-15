import {  Box, Paper , InputBase, IconButton, } from '@mui/material';  
import { useDispatch, useSelector } from 'react-redux/es/exports';
import SearchIcon from '@mui/icons-material/Search';
import { setFilterByName } from '../store/slices';

export const Search = () => {

  const dispatch = useDispatch();
  
    const onSearchByName = ({value}) => {  

      dispatch( setFilterByName({filterByName: value} )); 
    }      
  return (
    <Box sx={{}}>       
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >        
          <InputBase             
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              onChange={e => onSearchByName(e.target) }
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>        
        </Paper>
    </Box>
  )
}
