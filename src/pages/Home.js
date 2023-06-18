import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {

  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  

  console.log(bodyPart);
  
  return (
    <Box>
      <HeroBanner />
      
      <SearchExercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </Box>
  )
}
export default Home;