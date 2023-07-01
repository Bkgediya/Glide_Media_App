import React , {useEffect,useState} from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Videos,ChannelCard } from '.';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setvideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`channels?part='snippet'&id=${id}`)
      .then((data) => {
        console.log("channeldeta",data.items[0])
        setChannelDetail(data?.items[0])
      })

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => {
          setvideos(data?.items)
        })
  }, [id])
  
  return (
    <Box minHeight='95vh'>
        <Box>
          <div style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}/>
          {channelDetail && <ChannelCard channelDetail = {channelDetail} marginTop = '-110px'/>}
          <Box sx ={{
            width:'75%',
            display:'flex',
            justifyContent:'space-evenly',
            flexWrap:'wrap',
            margin:'auto'
          }}>
            {videos && <Videos videos={videos}/>}          
          </Box>
        </Box>
    </Box>
  )
}

export default ChannelDetail