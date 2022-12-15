import { Box, Stack } from "@mui/material"
import VideoCard from "../"

const Videos = ({ videos }) => {
  return (
    <Stack width={'100%'} 
    direction={'row'} 
    flexWrap={'wrap'} 
    justifyContent={'center'}
    gap={2} >
      {videos.map(item => (
        <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos