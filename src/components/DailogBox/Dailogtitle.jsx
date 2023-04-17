import React from 'react'
import { Stack,Typography, Divider  } from '@mui/material';
import { EjectIcon } from '../../utils/Icons';

function Dailogtitle({priceRange,ItemDetails}) {
  return (
   <>
              <Stack display="flex" direction="row" spacing={1} >
                <EjectIcon sx={{color:"red",alignSelf:"center"}}></EjectIcon>
                <Typography variant='h6'sx={{fontWeight:"600"}}>Customize "{ItemDetails.name}" </Typography>
            </Stack>
            {
              priceRange.initial ? <Typography sx={{paddingLeft:"2rem"}}>₹{priceRange.initial} - ₹{priceRange.last}</Typography>
              :
              <Typography sx={{paddingLeft:"2rem"}}>₹{priceRange}</Typography>
            }
          
            <Divider/>    
   </>
  )
}

export default Dailogtitle