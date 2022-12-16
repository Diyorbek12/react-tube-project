import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from '../../constants/colors';
import { Category, SearchBar } from '../';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {

  return (
    <Stack direction={'row'} 
    alignItems={'center'} 
    justifyContent={'space-between'} 
    p={2} 
    sx={{ position: 'sticky', top: 0, zIndex: 5, background: colors.primary}}>
      <Link to={'/'} style={{textDecoration: 'none', color: 'black', fontWeight: '700', fontSize: '25px', display: 'flex', alignItems:'center'}}><YouTubeIcon sx={{color: 'red'}}/>Yo-Tube</Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar