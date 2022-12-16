import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const ChannelCard = ({ video, marginTop }) => {
  return (
    <Box sx={{boxShadow: 'none', 
    borderRadius: '20px', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    width: {xs: '310px', md: '310px'},
    height: '326px',
    margin: 'auto',
    marginTop: marginTop }}>
      <Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
      <CardContent sx={{}}>
        <CardMedia image={video?.snippet?.thumbnails?.default?.url} 
        alt={video?.snippet?.title} 
        sx={{borderRadius: '50%',
        height: '180px',
        width: '180px',
        mb: 2,
        border: '1px solid black'}} />
        <Typography variant={'h6'}>{video?.snippet?.title}
          <CheckCircle sx={{fontSize: '12px', color: 'grey', ml: '5px'}} />
        </Typography>
        {video?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard