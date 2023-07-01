import React from 'react'
import { Link } from 'react-router-dom';
import { CardMedia, CardContent, Typography, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail: { id: { channelId }, snippet,statistics
},marginTop }) => {
  return  (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs: '100%', sm: '358px', md: "320px", lg:'300px'},
      height: '326px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={channelId && `/channel/${channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);
};


export default ChannelCard