import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);
  if(!Array.isArray(exerciseVideos) || exerciseVideos.length === 0){
    return 'Loading...';
  }

  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant="h4" mb="33px">
        Watch <span style={{color: '#ff2625', textTransform:'capitalize'}}><b>{name}</b></span> exercise videos
      </Typography>
      <Stack spacing justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: {lg:'row'},
          gap: { lg: '30px', xs: '0' },
          marginLeft:'10px',
        }}
      >
      { exerciseVideos?.slice(0, 6).map((item, index) =>(
        <a
           key={index}
           className="exercise-video"
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target="_blank"
           rel="noreferrer"
        >
        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
        <Box>
          <Typography variant="h5" color="#000">
            {item.video.title}
          </Typography>
          <Typography variant="h7" color="#FF0000">
            {item.video.channelName}
          </Typography>
        </Box>


        </a>
      ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;