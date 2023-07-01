import React from 'react'
import { logo } from '../utils/constants';
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack 
      sx = {{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}} 
      direction="row" 
      p = {2} 
      alignItems='center'>
        
      <Link to={'/'} style={{display:'flex',alignItems:'center'}}>
       <img src= {logo} alt='GlideLogo' height= '45px'/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar