import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Videos } from '../';

export default function Channel() {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo = await ApiService.fetching(
            `search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideo?.items)
      } catch(error) {
        console.log(videos);
        console.log(error);
      }
    }
    getData()
  }, [id])

  return (
    <Box minHeigth={'95vh'} mt={'1vh'}>
      <Box>
        <Box width={'100%'} height={'200px'} zIndex={10}
        sx={{backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat'}} />
        <ChannelCard  video={channelDetail} marginTop={'-100px'} />
      </Box>
      <Container maxWidth={'100%'}>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}