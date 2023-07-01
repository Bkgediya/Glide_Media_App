import React from 'react'
import {Stack,Box} from '@mui/material';
import  { VideoCard , ChannelCard } from './'


const Videos = ( { videos,direction }) => {
  if (!videos?.length) return "Loading..."
  return (
    <Stack flexDirection= {direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
      {
        videos.map((video,idx) => (
        <Box key = {idx}>
            {console.log(video)}
           {video.id.videoId && <VideoCard video = {video}/>}
           {video.id.channelId && <ChannelCard channelDetail = {video}/>}
        </Box>
        ))
      }
    </Stack>

  )
}

export default Videos