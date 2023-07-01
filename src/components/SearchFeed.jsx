import React,{useState,useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import { Videos } from './';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';



const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([])


  useEffect(() => {
    //asynchronize function that return promise so we have to add .then()
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      });
  }, [searchTerm])
  

  return (
    <Box  p={2} 
      sx={{
        overflowY:'auto',
        height:'90vh',
        flex:2
      }}>
      <Typography variant='h4'color= 'white' fontWeight='bold' mb = {2}>
        Search Result for <span style={{color:'#F31503',}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos = {videos}/>
  </Box> 
  )
}

export default SearchFeed