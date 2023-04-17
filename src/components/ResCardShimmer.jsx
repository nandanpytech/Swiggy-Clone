import { Stack,Box,Skeleton } from '@mui/material'
import React from 'react'

function ResCardShimmer() {
    const arry=Array(15).fill(1)
  return (
    <>
    <Stack padding={5} display="flex" direction="row" spacing={10} style={{flexWrap:"wrap"}}>
        {
              arry.map((element,index)=>{
               return <Box key={index}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton  width="80%"/>
                        <Skeleton width="60%" />
                     </Box>
              })
        }
    </Stack>
      
    </>
    

  )
}

export default ResCardShimmer