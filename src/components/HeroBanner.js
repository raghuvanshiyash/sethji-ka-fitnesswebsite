import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/okflipus8tp9cmcr.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs:'70px'},
      ml: {sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700}
      sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="2px" mt="30px">
        Strength <br/> Is The Only Thing <br/> That Matters In <br/> This World. 
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="15px">
        Check Out the most effective exercises 
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{background:"#ff2625", padding:'150'}}>
        Explore Exercises
      </Button>

      <Typography fontWeight={600} color="#ff2625"
        sx={{opacity:0.2, display: {lg:'block', xs:'none'}}} fontSize="200px" >
        Exercises
      </Typography>

      <img  style={{width:"50%", height:700, mt:"40%" }} src={HeroBannerImage} alt="hero-banner" className=" hero-banner-img"  />

    </Box>
  )
}

export default HeroBanner;