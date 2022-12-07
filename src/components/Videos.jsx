import React from 'react'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard} from './'

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap"
    justifyContent="start" gap={2} >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/> /**If found the particular video it, display video card */}
          {item.id.channelId && <ChannelCard channelDetail={item}/> /**If found the particular channel, then display the channel card */} 
        </Box>
      ))}
    </Stack>
  )
}

export default Videos