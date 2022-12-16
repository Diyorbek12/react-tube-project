import { CheckCircle } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import moment from 'moment';
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  
  return (
    <Card sx={{ width: {xs: '100%', sm: '310px', md: '315px'}, boxShadow: 'none' }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url} 
        alt={video?.snippet?.title}
        sx={{width: {xs: '100%', sm: '310px', md: '315px'}, 
        height: '180px', borderRadius: '15px'}} />
      </Link>
      <CardContent sx={{height: '160px', position: 'relative'}}>
    <Link to={`/video/${video.id.videoId}`}>
      <Typography my={'5px'} sx={{opacity: '.4'}}>
        {moment(video?.snippet?.publishedAt).fromNow()}
      </Typography>
      <Typography variant='subtitle1' fontWeight={'bold'} >
        {video?.snippet?.title.length >= 70 ? video?.snippet?.title.slice(0, 63) + '...' : video?.snippet?.title}
      </Typography>
    </Link>  
    <Link to={`/channel/${video?.snippet?.channelId}`}>
      <Stack direction={'row'} 
      position={'absolute'} 
      bottom={'10px'}
      alignItems={'center'}
      gap={'5px'}>
        <Avatar src={video?.snippet?.thumbnails?.default?.url} />
      <Typography variant='subtitle2' color={'grey'}>
        {video?.snippet?.channelTitle}
        <CheckCircle sx={{fontSize: '12px', color: 'grey', ml: '5px'}} />
      </Typography>
      </Stack>
    </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard