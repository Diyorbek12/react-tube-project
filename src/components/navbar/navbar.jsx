import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from '../../constants/colors';
import { Category, SearchBar } from '../';

const Navbar = () => {

  return (
    <Stack direction={'row'} 
    alignItems={'center'} 
    justifyContent={'space-between'} 
    p={2} 
    sx={{ position: 'stickey', top: 0, zIndex: 5, background: colors.primary}}>
      <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>Logo-tube</Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar