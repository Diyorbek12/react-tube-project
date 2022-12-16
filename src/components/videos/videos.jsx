import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "../";

const Videos = ({ videos }) => {

  if (!videos.length) return <Loader />

  return (
    <Stack  
    direction={'row'} 
    flexWrap={'wrap'} 
    justifyContent={'space-between'}
    gap={2} >
      {videos?.map((item, index) => (
        <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos